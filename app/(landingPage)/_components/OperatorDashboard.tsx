"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { AdServices } from "@/lib/adServices";
import type { PodItem, DashboardMetrics, PlatformType } from "@/lib/types";
import SectionBadge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { RotateCw } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function OperatorDashboard() {
  const [pods, setPods] = useState<PodItem[]>([]);
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [activePlatform, setActivePlatform] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [secondsSinceSync, setSecondsSinceSync] = useState<number>(0);

  // 1. Initial Data Fetching
  useEffect(() => {
    let isMounted = true;

    async function fetchInitialData() {
      try {
        const data = await AdServices.fetchAllDashboardData();
        if (isMounted) {
          setPods(data.pods);
          setMetrics(data.metrics);
          setSecondsSinceSync(0);
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Failed to load dashboard data:", err);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void fetchInitialData();

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. Manual Refresh Function
  const handleManualRefresh = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await AdServices.fetchAllDashboardData();
      setPods(data.pods);
      setMetrics(data.metrics);
      setSecondsSinceSync(0);
    } catch (err) {
      console.error("Failed to refresh dashboard data:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 3. Live Timer SYNCED Xs AGO
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsSinceSync((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // 4. Dynamic Platforms List
  const availablePlatforms = useMemo(() => {
    return Array.from(new Set(pods.map((p) => p.platform))) as PlatformType[];
  }, [pods]);

  // 5. Dynamic Metrics Calculation pods direct
  const computedMetrics = useMemo(() => {
    const totalSpend = pods.reduce((acc, pod) => {
      const numeric = parseFloat(pod.spendCurrent.replace(/[^0-9.]/g, "")) || 0;
      return acc + numeric;
    }, 0);

    const activeCount = pods.filter((p) => p.status === "ACTIVE").length;
    const scalingCount = pods.filter((p) => p.status === "SCALING").length;

    return {
      dailySpend:
        totalSpend > 0
          ? `€ ${totalSpend.toFixed(1)}k`
          : (metrics?.dailySpend ?? "€ 0.00"),
      activePodsRatio: `${activeCount} / ${pods.length || 0}`,
      todayScaling: `+ ${scalingCount} TODAY`,
    };
  }, [pods, metrics]);

  // 6. Filtered Pods
  const filteredPods = useMemo(() => {
    return pods.filter((pod: PodItem) => {
      const matchesPlatform =
        activePlatform === "ALL" || pod.platform === activePlatform;
      const matchesSearch =
        pod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pod.accountCode.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesPlatform && matchesSearch;
    });
  }, [pods, activePlatform, searchQuery]);

  const getCount = (platform: PlatformType): number =>
    pods.filter((p: PodItem) => p.platform === platform).length;

  return (
    <section className="py-15">
      <div className="2xl:max-w-7xl lg:max-w-6xl md:max-w-3xl px-5 mx-auto space-y-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="space-y-3">
            <SectionBadge text="OPERATOR DASHBOARD" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              The control panel <br /> behind the fabric.
            </h2>
          </div>
          <p className="dark:text-zinc-300 text-zinc-600 max-w-sm text-sm leading-relaxed">
            One dashboard. Every account, every platform, every replacement —
            managed without ever logging into a platform UI.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="rounded-2xl border border-neutral-200/60 dark:border-white/5 bg-neutral-100/40 dark:bg-neutral-900/60 backdrop-blur-xl shadow-2xl overflow-hidden">
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-3 border-b border-neutral-200/60 dark:border-white/5">
            <div className="flex items-center space-x-3">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full dark:bg-zinc-700 bg-zinc-300"></div>
                <div className="w-2.5 h-2.5 rounded-full dark:bg-zinc-700 bg-zinc-300"></div>
                <div className="w-2.5 h-2.5 rounded-full dark:bg-zinc-700 bg-zinc-300"></div>
              </div>
              <div className="border border-neutral-200/60 dark:border-white/5 text-zinc-400 text-xs px-3 py-1 rounded-md">
                app.digestmedia.io / fabric
              </div>
            </div>
            <div className="text-[11px] text-zinc-500">
              WORKSPACE · <span className="text-zinc-400">DIGEST MEDIA</span>
            </div>
          </div>

          {/* Dynamic Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x dark:divide-zinc-800/60 border-b border-neutral-200/60 dark:border-white/5">
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-2">
                Daily Spend
              </div>
              <div className="text-3xl font-semibold tracking-tight">
                {computedMetrics.dailySpend}
              </div>
              <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                <span></span> {metrics?.dailySpendDelta ?? "12.4%"}
              </div>
            </div>

            <div className="p-6">
              <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-2">
                Active Pods
              </div>
              <div className="text-3xl font-semibold tracking-tight">
                {computedMetrics.activePodsRatio}
              </div>
              <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                {computedMetrics.todayScaling}
              </div>
            </div>

            <div className="p-6">
              <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-2">
                Replacements · 30D
              </div>
              <div className="text-3xl font-semibold tracking-tight">
                {metrics?.replacements30D ?? "0"}
              </div>
              <div className="text-xs text-zinc-500 mt-2">
                {metrics?.avgDuration ?? "AVG 2.4H"}
              </div>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 min-h-100">
            {/* Sidebar */}
            <div className="p-5 border-r border-neutral-200/60 dark:border-white/5 space-y-6">
              <div>
                <label className="text-[11px] uppercase tracking-wider text-zinc-500 block mb-2">
                  Filter
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search pods..."
                  className="w-full border border-neutral-200/60 dark:border-white/5 rounded-lg px-3 py-1.5 text-xs placeholder-zinc-500 focus:outline-none focus:border-pink-500 transition-colors"
                />
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-wider text-zinc-500 mb-3">
                  Platforms
                </div>
                <div className="space-y-1">
                  {/* All button */}
                  <button
                    onClick={() => setActivePlatform("ALL")}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                      activePlatform === "ALL"
                        ? "bg-[#E72D87]/10 border border-[#E72D87]/20 backdrop-blur-md font-medium"
                        : "text-zinc-400 hover:bg-[#E72D87]/10 hover:text-black dark:hover:text-white"
                    }`}
                  >
                    <span>All Platforms</span>
                    <span className="text-[11px] text-zinc-500">
                      {pods.length}
                    </span>
                  </button>

                  {/* Dynamic Platforms list */}
                  {availablePlatforms.map((platform) => (
                    <button
                      key={platform}
                      onClick={() => setActivePlatform(platform)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                        activePlatform === platform
                          ? "bg-[#E72D87]/10 border border-[#E72D87]/20 backdrop-blur-md font-medium"
                          : "text-zinc-400 hover:bg-[#E72D87]/10 hover:text-black dark:hover:text-white"
                      }`}
                    >
                      <span>{platform}</span>
                      <span className="text-[11px] text-zinc-500">
                        {getCount(platform)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                variant={"digest"}
                onClick={() => void handleManualRefresh()}
                className="w-full h-12 transition-all flex items-center justify-center gap-2"
              >
                <span>
                  <RotateCw />
                </span>{" "}
                Refresh data
              </Button>
            </div>

            {/* Table */}
            <div className="md:col-span-3 flex flex-col justify-between">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-neutral-200/60 dark:border-white/5 text-[11px] uppercase text-zinc-500">
                      <th className="py-3 px-4 font-normal">Pod</th>
                      <th className="py-3 px-4 font-normal">Spend</th>
                      <th className="py-3 px-4 font-normal">Utilization</th>
                      <th className="py-3 px-4 font-normal">Status</th>
                      <th className="py-3 px-4 font-normal text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/30">
                    {isLoading ? (
                      <tr>
                        <td
                          colSpan={5}
                          className="py-12 text-center text-zinc-500 animate-pulse"
                        >
                          Loading live data...
                        </td>
                      </tr>
                    ) : filteredPods.length === 0 ? (
                      <tr>
                        <td
                          colSpan={5}
                          className="py-12 text-center text-zinc-500"
                        >
                          No pod found for this selection.
                        </td>
                      </tr>
                    ) : (
                      filteredPods.map((pod: PodItem) => (
                        <tr
                          key={pod.id}
                          className="dark:hover:bg-zinc-900/40 hover:bg-zinc-200/30 transition-colors"
                        >
                          <td className="py-3.5 px-4">
                            <div className="font-medium text-zinc-500 dark:text-zinc-300">
                              {pod.name}
                            </div>
                            <div className="text-[10px] text-zinc-500 mt-0.5">
                              {pod.accountCode}
                            </div>
                          </td>
                          <td className="py-3.5 px-4 dark:text-zinc-300 text-zinc-500">
                            {pod.spendCurrent}{" "}
                            <span className="text-zinc-600">
                              / {pod.spendLimit}
                            </span>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <span className="text-[11px] text-zinc-500 w-7">
                                {pod.utilization}%
                              </span>
                              <div className="w-28 dark:bg-zinc-800 bg-zinc-400/20 h-1.5 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-pink-400 rounded-full transition-all duration-500"
                                  style={{
                                    width: `${Math.min(pod.utilization, 100)}%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-medium tracking-wide border ${
                                pod.status === "ACTIVE"
                                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                                  : pod.status === "SCALING"
                                    ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                    : "bg-zinc-500/10 text-zinc-400 border-zinc-500/20"
                              }`}
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  pod.status === "ACTIVE"
                                    ? "bg-emerald-400"
                                    : pod.status === "SCALING"
                                      ? "bg-amber-400"
                                      : "bg-zinc-500"
                                }`}
                              ></span>
                              {pod.status}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <DropdownMenu>
                              <DropdownMenuTrigger className="text-zinc-500 hover:text-zinc-200 hover:bg-white/5 py-1 px-2 rounded-md transition-colors cursor-pointer">
                                  ⋯
                              </DropdownMenuTrigger>
                              <DropdownMenuContent
                                align="end"
                                className="w-44 bg-[#11151c] border-white/10 text-zinc-300 text-xs"
                              >
                                <DropdownMenuItem
                                  onClick={() =>
                                    navigator.clipboard.writeText(
                                      pod.accountCode,
                                    )
                                  }
                                  className="cursor-pointer hover:bg-white/5 focus:bg-white/5"
                                >
                                  Copy Account Code
                                </DropdownMenuItem>

                                <DropdownMenuItem
                                  onClick={() => {
                                    const url =
                                      pod.platform === "Meta"
                                        ? `https://adsmanager.facebook.com/adsmanager/manage/campaigns?act=${pod.accountCode.replace("META-", "")}`
                                        : pod.platform === "Google Ads"
                                          ? "https://ads.google.com/ups/routing?source=206&subid=xs-ip-gemini-adlt"
                                          : pod.platform === "Tiktok"
                                            ? "https://ads.tiktok.com"
                                            : "https://ads.snapchat.com";
                                    window.open(url, "_blank");
                                  }}
                                  className="cursor-pointer hover:bg-white/5 focus:bg-white/5"
                                >
                                  Open in {pod.platform}
                                </DropdownMenuItem>

                                <DropdownMenuSeparator className="bg-white/10" />

                                <DropdownMenuItem
                                  onClick={() => {
                                    // status pod direct f state
                                    setPods((prev) =>
                                      prev.map((p) =>
                                        p.id === pod.id
                                          ? {
                                              ...p,
                                              status:
                                                p.status === "ACTIVE"
                                                  ? "STANDBY"
                                                  : "ACTIVE",
                                            }
                                          : p,
                                      ),
                                    );
                                  }}
                                  className="cursor-pointer text-amber-400 hover:bg-amber-500/10 focus:bg-amber-500/10"
                                >
                                  {pod.status === "ACTIVE"
                                    ? "Pause Pod"
                                    : "Activate Pod"}
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Dynamic Status Bar */}
              <div className="p-4 border-t dark:border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
                <span>
                  {filteredPods.length} OF {pods.length} PODS · LIVE
                </span>
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  SYNCED {secondsSinceSync}S AGO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

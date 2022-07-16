import { PluginRenderer } from "@coral-xyz/anchor-ui-renderer";
import { usePlugins, useTablePlugins } from "@coral-xyz/recoil";
import type { SearchParamsFor } from "@coral-xyz/recoil";

export function PluginDisplay({ pluginUrl }: SearchParamsFor.Plugin["props"]) {
  const plugins = usePlugins();
  const p = plugins.find((p) => p.iframeUrl === encodeURI(pluginUrl));

  if (p === undefined) {
    throw new Error("unable to find plugin");
  }
  return <PluginRenderer key={p.iframeUrl} plugin={p} />;
}

export function PluginTableDetailDisplay({
  pluginUrl,
}: SearchParamsFor.Plugin["props"]) {
  const plugins = useTablePlugins();
  const p = plugins.find((p) => p.iframeUrl === encodeURI(pluginUrl));
  if (p === undefined) {
    throw new Error("unable to find plugin");
  }
  return <PluginRenderer key={p.iframeUrl} plugin={p} />;
}
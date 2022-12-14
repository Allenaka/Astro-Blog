import type { PageConfig, PageList } from "@/declare/defineBlogConfig";
import cfg from "blog.config";

type PathListProps = Record<string, PageList>

const PathList: PathListProps = {
  '/': 'index',
  '/about': 'about',
  '/search': 'search'
}

export default function (url: URL): PageConfig {
  return cfg.pages[PathList[url.pathname]]!
}
export type ToolType = {
  title: string;
  description: string;
  type?: string;
  date?: string;
  path: string;
};

const toolsList: ToolType[] = [
  {
    title: "External Tools",
    description: "",
    path: "/tools/external-tools",
  },
  {
    title: "Markdown Renderer",
    description: "Online renderer for Markdown and LaTeX.",
    path: "/tools/markdown-renderer",
  },
  {
    title: "Duplicate Remover",
    description: "Remove duplicate items from a list.",
    path: "/tools/duplicate-remover",
  },
  {
    title: "Japanese File Reader",
    description: "Render Japanese text file, with included furigana.",
    path: "/tools/japanese-file-reader",
  },
  {
    title: "Image Viewer",
    description:
      "View images from a JSON list of links. Written during Syncs Hack 2021 to help manually filter collected images.",
    path: "/tools/syncshack2021-image-viewer",
  },
  {
    title: "VTT Extractor",
    description: "Extracts the subtitle text from VTT files.",
    path: "/tools/vtt-extractor",
  },
  {
    title: "Lyric Slides",
    description: "Shows lyrics with slides.",
    path: "/tools/lyric-slides",
  },
  {
    title: "Markdown/Pandoc Footnote Relabeller",
    description:
      "Replace the labels of markdown footnotes with ascending integers.",
    path: "/tools/md-footnote-relabel",
  },
  {
    title: "Runsheet timer",
    description: "Keep track of a schedule.",
    path: "/tools/runsheet-timer",
  },
];

export const externalToolList: ToolType[] = [
  {
    title: "SO(3) Webs",
    description: "Tools for examining SO(3) webs.",
    path: "https://dustbringer.github.io/web--so3webs/#/translator",
  },
  {
    title: "String diagram maker",
    description:
      "A online tool to design basic string diagrams to export to TikZ.",
    path: "https://dustbringer.github.io/web--string-diagram-maker/",
  },
];

export default toolsList;

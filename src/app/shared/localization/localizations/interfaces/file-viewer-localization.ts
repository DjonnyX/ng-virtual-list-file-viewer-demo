import { IFileViewerHeaderLocalization } from "./file-viewer-header-localization";
import { IPostsLocalization } from "./file-viewer-messages-localization";

/**
 * @author Evgenii Alexandrovich Grebennikov
 * @email djonnyx@gmail.com
 * @license Copyright (c) 2026 Evgenii Alexandrovich Grebennikov (djonnyx@gmail.com tg: http://t.me/djonnyx).
 */
export interface IFileViewerLocalization {
    header: IFileViewerHeaderLocalization;
    messages: IPostsLocalization;
}
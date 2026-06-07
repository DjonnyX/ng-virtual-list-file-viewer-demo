import { IFileViewerMessagesMessageContextMenuMenuLocalization } from "./file-viewer-messages-message-context-menu-menu-localization";
import { IFileViewerMessagesMessageDeleteDialogLocalizataion } from "./file-viewer-messages-message-delete-dialog-localization"

/**
 * @author Evgenii Alexandrovich Grebennikov
 * @email djonnyx@gmail.com
 * @license Copyright (c) 2026 Evgenii Alexandrovich Grebennikov (djonnyx@gmail.com tg: http://t.me/djonnyx).
 */
export interface IFileViewerMessagesMessageLocalizataion {
    dialog: {
        delete: IFileViewerMessagesMessageDeleteDialogLocalizataion;
    },
    contextMenu: {
        menu: IFileViewerMessagesMessageContextMenuMenuLocalization;
    },
}
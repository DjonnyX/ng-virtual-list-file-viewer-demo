import { Id } from 'ng-virtual-list';
import { MessageTypes } from "@shared/enums";

/**
 * @author Evgenii Alexandrovich Grebennikov
 * @email djonnyx@gmail.com
 */
export interface IFileViewerItemData {
  id: Id;
  dateTime: number;
  isBanner?: boolean;
  text: string;
  type?: MessageTypes,
}
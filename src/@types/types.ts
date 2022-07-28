import { IconProp, RotateProp } from '@fortawesome/fontawesome-svg-core';
import { MouseEvent, ReactNode } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';

export type StateProps = any
export type ActionProps = any
export type DispatchProps = any
export type ResponseProps = any
export type DataProps = any

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  custom?: boolean;
  navi_bar?: boolean;
  edit?: boolean;
  modal_edit?: boolean;
  del?: boolean;
  mask?: boolean;
  footer?: boolean;
  mobile_modal_del?: boolean;
  close_delete_modal?: boolean;
  lang_select?: boolean;
  select_lang?: boolean;
  selectedLang?: boolean;
  show?: boolean;
  toLeft?: boolean;
  text?: string;
  type?: string;
  x?: number;
  y?: number
}

export type Dragon = {
  id: number;
  name: string;
  type: string;
  createdAt?: string;
  updatedAt?: string
}

export type DragonsListProps = {
  loading: boolean;
  data: Dragon[]
}

export type IconsProps = {
  fa_eye_slash?: boolean
  fa_times?: boolean;
  fa_trash?: boolean;
  fa_pencil_check?: boolean;
  fa_search?: boolean;
  fa_chevron?: boolean;
  fa_arrow?: boolean;
  isFaEyeSlash?: boolean
  isModalOpen?: boolean;
  toLeft?: boolean;
  drop?: boolean;
  show?: boolean;
  faIcon: IconProp;
  rotation?: RotateProp
}
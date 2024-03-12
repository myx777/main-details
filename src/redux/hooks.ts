/**
 *  Этот файл служит центральным узлом для повторного экспорта предварительно набранных хуков Redux.
// Этот импорт ограничен в других местах, чтобы обеспечить единообразие
// использование типизированных перехватчиков во всем приложении.
// Здесь мы отключаем правило ESLint, потому что это назначенное место
// для импорта и реэкспорта типизированных версий хуков.
/ eslint-disable @typescript-eslint/no-restricted-imports /
 */

import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../types/storeType"

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
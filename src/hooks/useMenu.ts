import {
    useRouter,
    usePathname
} from 'next/navigation'
import menuData from '@/data/menu.json'
import { TListMenu } from '@/libs/menu.type';
const listMenu: TListMenu[] = menuData.menu;


const useMenu = () => {
    const {push} = useRouter()
    const pathname = usePathname()
    const handleClickMenu = (target : string) => {      
        push(target)
    }
    return {
        listMenu,
        pathname,
        handleClickMenu
    }
}

export default useMenu
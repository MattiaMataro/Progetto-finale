import CategoryLists from "../category-lists/CategoryLists";
import { Outlet } from "react-router-dom";


export default function Category() {
    return (
        <>
            <CategoryLists />
            <Outlet />
        </>
    )
}
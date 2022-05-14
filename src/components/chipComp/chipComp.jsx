import { useCategory } from '../../context/categoryContext/categoryContext';
import { useVideoList } from '../../context/videoListContext/videoListContext';
import '../chipComp/chipComp.css';


export const ChipComp = () => {
    const { category } = useCategory();
    const { videoDispatch } = useVideoList();

    return (
        <>
            {
                category.map((categoryItem) => {
                    return (
                        <li className='chip' key={categoryItem._id} onClick={() => videoDispatch({ type: 'SHOW_BY_CATEGORY', payload: categoryItem.categoryName })}>
                            {categoryItem.categoryName}
                        </li>
                    )
                })
            }
        </>
    )
}
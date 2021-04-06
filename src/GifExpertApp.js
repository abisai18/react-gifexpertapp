import React , {useState}  from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch','Samuray X','Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);
    //const handleAdd = () => {
    //    setcategories(cat => ['HunterXHunter',...categories]);
    //}

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>
            <ol>
                {
                    categories.map( (category,i) => (
                            <GifGrid 
                                key={category}
                                category={category} 
                            />
                        ))
                }
            </ol>
        </div>
    )
}

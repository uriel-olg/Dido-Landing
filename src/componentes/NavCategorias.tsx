import { categorias } from "./productos"

categorias


export const NavCategorias = () =>{


    return (
        <nav>
        {categorias.map(p => {
            return (
                <div >
                    <p>{p.img}</p>
                </div>
            )
        })}

        </nav>
    )
}
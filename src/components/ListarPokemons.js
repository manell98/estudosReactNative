import {Text, View} from "react-native";
import {useState} from "react";

export default function ListarPokemonsComponent() {
    const [pokemons, setPokemons] = useState([{}]);

    const [objImgPokemons, setObjImgPokemons] = useState([{}]);

    const listarPokemons = async () => {
        const result = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=100");

        const arrayPokemons = [];

        for (const objPokemon of result.data.results) {
            const result2 = await axios.get(objPokemon.url);

            arrayPokemons.push({
                ...objPokemon,
                experiencia: result2.data.base_experience
            });
        }

        setPokemons(arrayPokemons);
    };

    const listarImgPokemons = () => {
        const arrayImgs = [];

        pokemons.forEach((pokemon, index) => {
            const nomePokemon = pokemon.name[0].toUpperCase() + pokemon.name.substring(1);

            arrayImgs.push({
                nome: nomePokemon,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`,
                experiencia: pokemon.experiencia,
            });
        })

        setObjImgPokemons(arrayImgs);
    };

    return (
        <View>
            <button onClick={listarPokemons}><Text>Listar Pokemons</Text></button>
            <button onClick={listarImgPokemons}><Text>Listar Img Pokemons</Text></button>
        </View>
    );
}

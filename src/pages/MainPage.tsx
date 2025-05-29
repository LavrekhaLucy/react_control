import {GenreComponent} from "../components/genres/GenreComponent.tsx";

export const MainPage = () => {
    return (
        <div className="p-6">


            <section className="mb-8">
                <h2 className="text-2xl font-serif mb-4 text-center text-gray-700">Genres</h2>
                <GenreComponent />
            </section>




        </div>
    );
};
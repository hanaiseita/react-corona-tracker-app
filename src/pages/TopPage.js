import Results from "../components/Results";
import Selector from "../components/Selector";
import Title from "../components/Title";
import Header from "../components/Header";


const TopPage = ({countriesJson,setCountry,countryData,loading}) => {
    return(
        <div className="top-page-container">
            <div>
            <Header/>
            <Title/>
            <Selector countriesJson={countriesJson} setCountry={setCountry}/>
            <Results countryData={countryData} loading={loading}/>
            </div>
        </div>
    );
};

export default TopPage;
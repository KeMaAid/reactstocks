import Searchbar from "./SearchBar";

const SettingList = props => {

    return (
        <div className="Settings">
            <p>Limit available stocklist</p>
            <Searchbar passed={props.listMaxSize} onChange={e => props.onListMaxSizeChange(e)} placeholder="0"/>
        </div>
    );

}

export default SettingList;
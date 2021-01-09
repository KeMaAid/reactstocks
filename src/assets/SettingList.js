import Searchbar from "./SearchBar";

const SettingList = props => {

    function handleListChange(newValue){
        var listNewSize = parseInt(newValue);
        if(isNaN(listNewSize)){
            listNewSize = 0;
        };
        props.onChange({...props.setting, listMaxSize: listNewSize})
    }


    return (
        <div>
            <p>This is a SettingList</p>
            <Searchbar passed={props.setting.listMaxSize} onChange={handleListChange}/>
        </div>);

}

export default SettingList;
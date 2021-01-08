const SettingList = props => {

    return (
        <div>
            <p>This is a SettingList</p>
            <input value={props.setting.listMaxSize} 
            onChange={(e) => {
                var value = parseInt(e.target.value)
                if(isNaN(value)){
                    value = props.setting.listMaxSize
                };
                props.onChange({...props.setting, listMaxSize: value});
            }}/>
        </div>);

}

export default SettingList;
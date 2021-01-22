import Searchbar from "./SearchBar";
import { Slider } from '@material-ui/core';

const SettingList = props => {

    return (
        <div className="Settings">
            <p>Limit available stocklist</p>
            <Searchbar passed={props.listMaxSize} onChange={e => props.onListMaxSizeChange(e)} placeholder="0"/>
            <p>Select timerange</p>
            <Slider
                value={props.timeRange}
                onChange={(e, value) => props.onTimeRangeChange(value)}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    );

}

export default SettingList;
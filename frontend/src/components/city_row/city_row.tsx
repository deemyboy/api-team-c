import React from "react";
import { Row } from "react-bootstrap";
import { IWeatherIconProp } from "../weather_icon/weather_icon";
import { WeatherIconRow } from "../weather_icon_row/weather_icon_row";

export interface ICityRowProps {
    cityName: string;
    weatherIcons: IWeatherIconProp[];
}

export const CityRow: React.FC<ICityRowProps> = ({
    cityName,
    weatherIcons,
}) => {
    return (
        <Row>
            <p>{cityName}</p>

            <WeatherIconRow {...weatherIcons} />
        </Row>
    );
};

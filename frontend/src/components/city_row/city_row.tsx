import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { IWeatherIconProp } from "../weather_icon/weather_icon";
import { WeatherIconRow } from "../weather_icon_row/weather_icon_row";
import { IForecast } from "../city_forecast/forecast_day_card";
import { ICityProps } from "../city_table/city_table";

export const CityRow: React.FC<ICityProps> = ({
    cityName,
    weatherIcons,
    toggleRow,
}) => {
    return (
        <Row className="city-row" onClick={(e) => toggleRow()}>
            <Col className="col-3">
                <h3 className="city-row__city-name">{cityName}</h3>
            </Col>
            <Col className="col-9">
                <WeatherIconRow weatherIcons={weatherIcons} />
            </Col>
        </Row>
    );
};

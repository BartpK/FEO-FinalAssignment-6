import { assign } from "lodash";

const gray = "#d6d7db";
const lightgray = "rgb(214, 215, 219, 0.4)"

// * Typography
// *
const sansSerif = "'Helvetica Neue', 'Helvetica', sans-serif";
const letterSpacing = "normal";
const fontSize = 12;
// *
// * Layout
// *
const padding = 8;
const baseProps = {
    width: 1200,
    height: 250,
    padding: 50
};
// *
// * Labels
// *
const baseLabelStyles = {
    fontFamily: sansSerif,
    fontSize,
    letterSpacing,
    padding,
    fill: gray,
    stroke: "transparent",
    strokeWidth: 0
};

const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);
// *
// * Strokes
// *
const strokeDasharray = "1, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

export default {
    axis: assign(
        {
            style: {
                axis: {
                    fill: "transparent",
                    stroke: gray,
                    strokeWidth: 2,
                    strokeLinecap,
                    strokeLinejoin
                },
                axisLabel: assign({}, centeredLabelStyles, {
                    padding,
                    stroke: "transparent"
                }),
                grid: {

                    stroke: lightgray,
                    strokeDasharray,
                    strokeLinecap,
                    strokeLinejoin,
                    pointerEvents: "painted"
                },
                ticks: {
                    fill: "transparent",
                    size: 7,
                    stroke: gray,
                    strokeWidth: 1,
                    strokeLinecap,
                    strokeLinejoin
                },
                tickLabels: assign({}, baseLabelStyles, {
                    fill: gray,
                })
            }
        },
        baseProps
    ),
    bar: assign(
        {
            style: {
                data: {
                    padding,
                    strokeWidth: 0
                },
                labels: baseLabelStyles
            }
        },
        baseProps
    ),
    chart: baseProps,


    legend: {

        x: 1000,
        y: 0,
        gutter: 10,
        orientation: "horizontal",
        titleOrientation: "top",
        style: {
            data: {
                type: "circle",
            },
            labels: baseLabelStyles,
            title: assign({}, baseLabelStyles, { padding: 5 })
        }
    },
    line: assign(
        {
            style: {
                data: {
                    fill: "transparent",
                    opacity: 1,
                    strokeWidth: 3
                },
                labels: baseLabelStyles
            }
        },
        baseProps
    ),
};



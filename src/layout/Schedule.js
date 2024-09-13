import React, {useState} from "react";
import Button from "../components/button";

const Schedule = () => {
    const [selectedType, setSelectedType] = useState('Day');

    const handleTypeChange = (type) => {
        setSelectedType(type);
    };

    const scheduleData = [
        {
            plate: "F 5444 AMP",
            merk: "Avanza",
            driver: "Burhan",
            week1: "",
            week2: "active",
            week3: "inactive",
            week4: "",
            week5: "",
        },
        {
            plate: "F 3333 XAB",
            merk: "Raize",
            driver: "Cristo",
            week1: "active",
            week2: "active",
            week3: "",
            week4: "inactive",
            week5: "",
        },
        {
            plate: "F 9999 BAD",
            merk: "Cruise",
            driver: "Ivana",
            week1: "",
            week2: "",
            week3: "active",
            week4: "",
            week5: "inactive",
        },
        {
            plate: "F 1099 AGP",
            merk: "Jazz",
            driver: "Yulgar",
            week1: "",
            week2: "inactive",
            week3: "inactive",
            week4: "active",
            week5: "",
        },
        {
            plate: "F 1999 ABI",
            merk: "Brio",
            driver: "Fernando",
            week1: "",
            week2: "",
            week3: "",
            week4: "active",
            week5: "",
        },
        {
            plate: "F 2021 YES",
            merk: "Civic",
            driver: "Sri",
            week1: "",
            week2: "inactive",
            week3: "",
            week4: "",
            week5: "active",
        },
    ];


    return (
        <div className="bg-white p-6 shadow-md rounded-lg w-full">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-[28px] font-semibold">Schedule</h1>
                <div className="flex space-x-2">
                    <Button
                        className="w-full"
                        type="default"
                    //active={activeButton === "Day"}
                    //onClick={() => handleButtonClick("Day")}
                    >Day</Button>
                </div>
            </div>

            {/* Bảng lịch trình */}
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-200 text-sm rounded-md">
                    <thead>
                        <tr>
                            <th className="border border-gray-200 px-4 py-2 text-left rounded-tl-lg">Plate</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Merk</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Driver</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">W1</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">W2</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">W3</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">W4</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">W4</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">W4</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">W4</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">W4</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">W4</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">W4</th>
                            <th className="border border-gray-200 px-4 py-2 text-center">W4</th>
                            <th className="border border-gray-200 px-4 py-2 text-center rounded-tr-lg">W5</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scheduleData.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-100">
                                <td className="border border-gray-200 px-4 py-2">{item.plate}</td>
                                <td className="border border-gray-200 px-4 py-2">{item.merk}</td>
                                <td className="border border-gray-200 px-4 py-2">{item.driver}</td>
                                {/* Các tuần */}
                                <td className="border border-gray-200 px-4 py-2 text-center">
                                    {item.week1 && (
                                        <div
                                            className={`h-4 w-4 rounded-full ${item.week1 === "active"
                                                    ? "bg-blue-500"
                                                    : item.week1 === "inactive"
                                                        ? "bg-red-500"
                                                        : ""
                                                }`}
                                        ></div>
                                    )}
                                </td>
                                <td className="border border-gray-200 px-4 py-2 text-center">
                                    {item.week2 && (
                                        <div
                                            className={`h-4 w-4 rounded-full ${item.week2 === "active"
                                                    ? "bg-blue-500"
                                                    : item.week2 === "inactive"
                                                        ? "bg-red-500"
                                                        : ""
                                                }`}
                                        ></div>
                                    )}
                                </td>
                                <td className="border border-gray-200 px-4 py-2 text-center">
                                    {item.week3 && (
                                        <div
                                            className={`h-4 w-4 rounded-full ${item.week3 === "active"
                                                    ? "bg-blue-500"
                                                    : item.week3 === "inactive"
                                                        ? "bg-red-500"
                                                        : ""
                                                }`}
                                        ></div>
                                    )}
                                </td>
                                <td className="border border-gray-200 px-4 py-2 text-center">
                                    {item.week4 && (
                                        <div
                                            className={`h-4 w-4 rounded-full ${item.week4 === "active"
                                                    ? "bg-blue-500"
                                                    : item.week4 === "inactive"
                                                        ? "bg-red-500"
                                                        : ""
                                                }`}
                                        ></div>
                                    )}
                                </td>
                                <td className="border border-gray-200 px-4 py-2 text-center rounded-br-lg">
                                    {item.week5 && (
                                        <div
                                            className={`h-4 w-4 rounded-full ${item.week5 === "active"
                                                    ? "bg-blue-500"
                                                    : item.week5 === "inactive"
                                                        ? "bg-red-500"
                                                        : ""
                                                }`}
                                        ></div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Schedule;

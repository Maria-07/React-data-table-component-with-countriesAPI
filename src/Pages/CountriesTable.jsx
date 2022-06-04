import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const CountriesTable = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const url = await axios.get("https://restcountries.com/v2/all");
      // .then((data) => setCountries(data.data));
      setCountries(url.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
    },
    {
      name: "Native Name",
      selector: (row) => row.nativeName,
    },
    {
      name: "Country Capital",
      selector: (row) => row.capital,
    },
    {
      name: "Country Flag",
      selector: (row) => <img width={50} height={50} src={row.flag} alt="" />,
    },
  ];

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <DataTable
      title="Countries List"
      columns={columns}
      data={countries}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="650px"
    ></DataTable>
  );
};

export default CountriesTable;

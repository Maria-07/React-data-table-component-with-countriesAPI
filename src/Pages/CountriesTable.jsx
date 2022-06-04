import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const CountriesTable = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getCountries = async () => {
      try {
        const url = await axios.get("https://restcountries.com/v2/all");
        // .then((data) => setCountries(data.data));
        setCountries(url.data);
        setFilterCountries(url.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCountries();
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      return country.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterCountries(result);
  }, [countries, search]);

  const columns = [
    {
      name: "Country Name",
      selector: (row) => row.name,
      sortable: true,
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
    {
      name: "Action",
      cell: (row) => (
        <button
          className="btn btn-primary"
          onClick={() => alert(row.numericCode)}
        >
          Edit
        </button>
      ),
    },
  ];

  return (
    <DataTable
      title="Countries List"
      columns={columns}
      data={filterCountries}
      pagination
      fixedHeader
      fixedHeaderScrollHeight="650px"
      selectableRows
      selectableRowsHighlight
      highlightOnHover
      actions={<button className="btn btn-info"> Export </button>}
      subHeader
      subHeaderComponent={
        <>
          <p className="my-2 me-3 fw-bold">By Country Name</p>
          <input
            type="text"
            placeholder="Search here"
            className="w-25 form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </>
      }
      //   subHeaderAlign="left"
    ></DataTable>
  );
};

export default CountriesTable;

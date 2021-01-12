import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/styles';
import SearchInput from '../../../Components/SearchInput';
import { Card, CardContent, Button, Grid, Divider } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import StoriesTable from "./StoriesTable";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import IconButton from '@material-ui/core/IconButton';
import { yourdateactual } from "../../../Common/decorator";
import { Search as SearchIcon } from "@material-ui/icons";
import unitApi from "../../../Service/unit";
import eventApi from "../../../Service/event";
/* import EventDialog from "v7iews/Event/components/EventDialog"; */
import PrintIcon from "@material-ui/icons/Print";
import { API } from "../../../Constants/global";

const useStyles = makeStyles((theme) => ({
  card: {
    justifyContent: "space-between"
  },
  formControl: {
    minWidth: 150,
  },
}))


export const TableHistory = () => {

  const classes = useStyles();
  const [plate, setPlate] = useState({});
  const [date, setDate] = useState(yourdateactual());
  const [loading, setLoading] = useState(false);
  const [finder, setFinder] = useState("");
  const [units, setUnits] = useState([]);
  const [modal, setModal] = useState(false);
  const [selected, setSelected] = useState({});
  const [events, setEvents] = useState([]);
  const handlePlateChange = (e, newV) => setPlate(newV);
  const handleDateChange = ({ target }) => setDate(target.value);

  useEffect(() => {
    let mounted = true
    const fetchUnits = () => {
      unitApi.fetchData().then(res => {
        if (mounted) {
          if (res !== null && res.length) {
            setUnits([{ license_plate: 'Todo' }, ...res])
          } else {
            setUnits([])
          }
        }
      }).catch(err => console.log(err))
    }
    fetchUnits();

    return () => {
      mounted = false
    }
  }, [])

  const handleModal = (item) => {
    let sel = {};
    if (!modal) {
      const maped = JSON.parse(item.images)
      const images = [];
      for (const i in maped) {
        images.push({ source: API + "/" + maped[i] })
      }
      sel = { ...item, images }
    }
    setSelected(sel)
    setModal(!modal);
  }

  const handleSearchClick = () => {
    setLoading(true);
    let { license_plate: selected } = plate;
    if (selected === "Todo") {
      selected = "ALL"
    }
    eventApi.search({ date, plate: selected }).then(r => {
      setEvents(r)
      setLoading(false);
    }).catch(err => console.log(err));
  }

  const handleSearchChange = (event) => {
    setFinder(event.target.value);
  }

  const handleKeyPress = (e) => {
    e.persist();
    if (e.nativeEvent.key === "Enter") {
      if (searchable) {
        handleSearchClick();
      }
    }
  }

  const printurl = () => {
    if (!!plate) {
      let { license_plate } = plate;
      if (license_plate === "Todo") {
        license_plate = "all"
      }
      return (`${API}/static/reports/report${date}${license_plate}.csv`).replace(/-/gi, "").toLowerCase()
    }
    return ""
  }

  const filtered = events.filter(item => new RegExp(finder, "i").test(item.driver_fullname));

  const Print = (
    <Button
      type="submit"
      disabled={!filtered.length}
      onClick={() => window.open(printurl())}
      startIcon={<CloudDownloadIcon />}>Imprimir</Button>
  )

  const searchable = (plate !== null && Object.keys(plate).length) && date;
  return (
    <Card>
        <CardContent>
          <Grid container spacing={3} className={classes.card} >
            <Grid item sm={12} md={4} container spacing={1}>
              <Grid item>
                <Autocomplete
                  className={classes.formControl}
                  onChange={handlePlateChange}
                  id="combo-box-demo"
                  options={units}
                  getOptionLabel={(option) => option.license_plate}
                  renderInput={(params) => <TextField {...params} label="Placa" variant="outlined" />}
                />
              </Grid>
              <Grid item>
                <TextField
                  id="date"
                  label="Buscar por fecha"
                  type="date"
                  variant="outlined"
                  value={date}
                  onChange={handleDateChange}
                  onKeyDown={handleKeyPress}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <IconButton style={{background : "#e9e9e9",margin : "5px"}} disabled={!searchable} onClick={handleSearchClick}><SearchIcon /></IconButton>
              </Grid>
              <Grid item>
                <IconButton style={{background : "#e9e9e9",margin : "5px"}} disabled={!searchable} onClick={() => window.open(printurl())}><PrintIcon /></IconButton>
                
              </Grid>
            </Grid>
            <Grid item sm={12} md={4}>
              <SearchInput onChange={handleSearchChange} placeholder="Buscar por conductor" />
            </Grid>
          </Grid>
          <Divider className="mt-4 mb-2" />
          <StoriesTable events={filtered} loading={loading} onDetailClick={handleModal} />
        </CardContent>
      </Card>
  )
}

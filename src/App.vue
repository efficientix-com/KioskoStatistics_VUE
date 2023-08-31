<template>
  <div id="app">
    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false">
      <b-field>
        <b-tag size="is-large" rounded
          >¡Gracias por tu paciencia! Esto puede tardar unos segundos</b-tag
        >
      </b-field>
    </b-loading>
    <div id="module-component" v-show="isLoading === false">
      <h3 class="ml-1">Estadísticas de carga de EFX-FE-Kiosko</h3>
      <div>
        <h4 class="ml-1 mb-0">Tiempos de carga promedio por paso</h4>
        <div class="grid4Cards">
          <div class="col1 card text-center">
            <h3 class="pb-0">Sección Ticket</h3>
            <h4 class="mt-0 mb-0">{{ avgTicket }} ms</h4>
            <h5 class="mt-0 mb-0">Consultas</h5>
            <div class="gridTwoColumns">
              <div class="firstCol">
                Exitosas
                <br />
                {{ successTicketCounter }}
              </div>
              <div class="secondCol">
                Erróneas
                <br />
                {{ errorTicketCounter }}
              </div>
            </div>
          </div>
          <div class="col2 card text-center">
            <h3 class="pb-0">Sección Cliente</h3>
            <h4 class="mt-0 mb-0">{{ avgCliente }} ms</h4>
            <h5 class="mt-0 mb-0">Consultas</h5>
            <div class="gridTwoColumns">
              <div class="firstCol">
                Exitosas
                <br />
                {{ successClienteCounter }}
              </div>
              <div class="secondCol">
                Erróneas
                <br />
                {{ errorClienteCounter }}
              </div>
            </div>
          </div>
          <div class="col3 card text-center">
            <h3 class="pb-0">Sección Resumen</h3>
            <h4 class="mt-0 mb-0">{{ avgResumen }} ms</h4>
            <h5 class="mt-0 mb-0">Consultas</h5>
            <div class="gridTwoColumns">
              <div class="firstCol">
                Exitosas
                <br />
                {{ successResumenCounter }}
              </div>
              <div class="secondCol">
                Erróneas
                <br />
                {{ errorResumenCounter }}
              </div>
            </div>
          </div>
          <div class="col4 card text-center">
            <h3 class="pb-0">Sección Factura</h3>
            <h4 class="mt-0 mb-0">{{ avgFactura }} ms</h4>
            <h5 class="mt-0 mb-0">Consultas</h5>
            <div class="gridTwoColumns">
              <div class="firstCol">
                Exitosas
                <br />
                {{ successFacturaCounter }}
              </div>
              <div class="secondCol">
                Erróneas
                <br />
                {{ errorFacturaCounter }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="pb-2">
          <DatatableVue :data="objData" />
        </div>
        <div id="dashboardGraphics">
          <div class="leftTop">
            <apex-chart
              type="area"
              height="350"
              :options="optionsArea"
              :series="seriesArea"
            ></apex-chart>
          </div>

          <div class="leftBottom">
            <apex-chart
              type="bar"
              height="450"
              :options="chartOptionsColumn"
              :series="seriesColumn"
            ></apex-chart>
          </div>
          <div class="leftBottom2">
            <apex-chart
              type="area"
              height="350"
              :options="optionsArea_error"
              :series="seriesArea_error"
            ></apex-chart>
          </div>
        </div>
      </div>
      <footerFreebug />
    </div>
  </div>
</template>

<script>
import footerFreebug from "./components/footerFreebug.vue";
import axios from "axios";
import { filterAnualAllSteps } from "./filterAnualAllSteps";
import { filterErrorsWeekly } from "./filterErrorsWeekly";
import DatatableVue from "./components/Datatable.vue";

export default {
  name: "App",
  components: {
    footerFreebug,
    DatatableVue,
  },
  data: function () {
    return {
      // Var de testeo
      //   objData:[
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-11T21:26:42.165Z",
      //     time: "4241",
      //     successfulRequest: false,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-09T21:26:42.165Z",
      //     time: "5000",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T02:56:03.675Z",
      //     time: "5204",
      //     successfulRequest: false,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T03:26:00.261Z",
      //     time: "4208",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T03:27:50.864Z",
      //     time: "4062",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T03:33:36.269Z",
      //     time: "4165",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Factura",
      //     date: "2023-06-12T03:33:57.618Z",
      //     time: "2",
      //     successfulRequest: false,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T03:38:08.191Z",
      //     time: "12",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T03:38:12.059Z",
      //     time: "3880",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Factura",
      //     date: "2023-06-12T03:38:37.007Z",
      //     time: "1",
      //     successfulRequest: false,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T03:42:06.996Z",
      //     time: "4124",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Factura",
      //     date: "2023-06-12T03:42:28.575Z",
      //     time: "1",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T03:42:49.075Z",
      //     time: "23",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Cliente",
      //     date: "2023-06-12T03:48:51.230Z",
      //     time: "14",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Resumen",
      //     date: "2023-06-12T03:49:22.923Z",
      //     time: "4",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Factura",
      //     date: "2023-06-12T03:49:36.605Z",
      //     time: "2",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T03:50:37.857Z",
      //     time: "25",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T17:46:29.381Z",
      //     time: "4124",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T17:54:41.149Z",
      //     time: "12",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T17:54:44.673Z",
      //     time: "3536",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T18:16:10.079Z",
      //     time: "4225",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-12T19:13:55.408Z",
      //     time: "4548",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-21T16:15:53.305Z",
      //     time: "9",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-21T16:15:57.112Z",
      //     time: "3816",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-21T18:21:27.514Z",
      //     time: "3947",
      //     successfulRequest: true,
      //     message: "Obtuvo la información de la empresa con éxito",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-21T18:30:11.446Z",
      //     time: "8",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-21T18:30:15.038Z",
      //     time: "3600",
      //     successfulRequest: true,
      //     message: "Obtuvo la información de la empresa con éxito",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-21T18:31:19.986Z",
      //     time: "6",
      //     successfulRequest: true,
      //     message: "",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-21T18:31:23.527Z",
      //     time: "3547",
      //     successfulRequest: true,
      //     message: "Obtuvo la información de la empresa con éxito",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-21T18:36:29.726Z",
      //     time: "3906",
      //     successfulRequest: true,
      //     message: "Obtuvo la información de la empresa con éxito",
      //   },
      //   {
      //     stepslug: "Factura",
      //     date: "2023-06-21T18:37:04.624Z",
      //     time: "457",
      //     successfulRequest: true,
      //     message: "Factura consultada con éxito",
      //   },
      //   {
      //     stepslug: "Ticket",
      //     date: "2023-06-21T18:37:45.479Z",
      //     time: "4007",
      //     successfulRequest: true,
      //     message: "Obtuvo la información de la empresa con éxito",
      //   },
      //   {
      //     stepslug: "Cliente",
      //     date: "2023-06-21T18:41:29.422Z",
      //     time: "3317",
      //     successfulRequest: true,
      //     message: "Obtuvo información de facturación con éxito",
      //   },
      //   {
      //     stepslug: "Resumen",
      //     date: "2023-06-21T18:41:58.045Z",
      //     time: "8",
      //     successfulRequest: true,
      //     message: "Resumen desplegado con éxito",
      //   },
      //   {
      //     stepslug: "Factura",
      //     date: "2023-06-21T18:42:51.849Z",
      //     time: "43300",
      //     successfulRequest: true,
      //     message: "Factura timbrada con éxito",
      //   },
      //   {
      //     stepslug: "Factura",
      //     date: "2023-06-21T18:43:49.920Z",
      //     time: "421",
      //     successfulRequest: true,
      //     message: "Factura consultada con éxito",
      //   },
      // ],
      isLoading: true,
      objData: [],
      // Variables
      tableColumns: ["Paso", "Fecha", "Estatus", "Detalles"],
      tableColumnsVars: ["stepslug", "date", "successfulRequest", "message"],
      fullCurrentMonthStats: null,
      avgTicket: 0,
      successTicketCounter: 0,
      errorTicketCounter: 0,
      avgCliente: 0,
      successClienteCounter: 0,
      errorClienteCounter: 0,
      avgResumen: 0,
      successResumenCounter: 0,
      errorResumenCounter: 0,
      avgFactura: 0,
      successFacturaCounter: 0,
      errorFacturaCounter: 0,
      timeZone: "",

      // Options for error area chart
      optionsArea_error: {
        chart: {
          type: "area",
          id: "vuechart-example",
          height: 350,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
            autoSelected: "pan",
          },
        },
        stroke: {
          curve: "smooth",
          width: 1,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            type: "diagonal1",
            inverseColors: false,
            opacityFrom: 0.05,
            opacityTo: 0.8,
            stops: [-10, 95, 0],
          },
        },

        title: {
          text: "Ocurrencias de Error en la semana",
          align: "left",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
          ],
        },
        yaxis: {
          title: {
            text: "Ocurrencias de Error",
          },
        },
      },
      seriesArea_error: [],
      // Options for area chart
      optionsArea: {
        chart: {
          type: "area",
          id: "vuechart-example",
          height: 350,
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
            autoSelected: "pan",
          },
        },
        stroke: {
          curve: "smooth",
          width: 1,
        },
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            type: "diagonal1",
            inverseColors: false,
            opacityFrom: 0.05,
            opacityTo: 0.8,
            stops: [-10, 95, 0],
          },
        },

        title: {
          text: "Tiempos de carga del mes de primera vez",
          align: "left",
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: this.getDaysOfMonth(),
        },
        yaxis: {
          title: {
            text: "tiempo (ms)",
          },
        },
      },
      seriesArea: [],

      // Options for column graph
      seriesColumn: [],
      chartOptionsColumn: {
        chart: {
          height: 350,
          type: "bar",
          events: {
            click: function (chart, w, e) {
              console.log(chart, w, e);
            },
          },
          toolbar: {
            show: false,
            autoSelected: "pan",
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "90%",
            // distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        title: {
          text: "Tiempos promedio de carga por paso",
          align: "left",
        },
        colors: ["#174a5b", "#ef5350", "#077cab", "#101820"],
        stroke: {
          show: true,
          width: 5,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "En",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic",
          ],
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
        yaxis: {
          title: {
            text: "tiempo (ms)",
          },
        },
      },
    };
  },
  created() {
    // console.log(this.getDaysOfMonth());
    this.getTimeZone();
    
    // this.getStatsTime(objTest);
  },
  methods: {
    getStatsTime(data) {
      let successfulCounter = 0;
      let errorCounter = 0;
      let sumTime = 0;
      let avgTime = 0;
      let objTimeVars = {
        sumClient: 0,
        sumResumen: 0,
        sumFactura: 0,
        errorCliente: 0,
        errorResumen: 0,
        errorFactura: 0,
        successCliente: 0,
        successResumen: 0,
        successFactura: 0,
        avgCliente: 0,
        avgResumen: 0,
        avgFactura: 0,
      };
      for (let i in data) {
        if (data[i].stepslug === "Ticket" && data[i].successfulCounter !== "") {
          // console.log("Time in getStatsTime", data[i].time);
          sumTime += parseInt(data[i].time);
          if (data[i].successfulRequest === true) {
            successfulCounter++;
          } else {
            errorCounter++;
          }
        }
        if (
          data[i].stepslug === "Cliente" &&
          data[i].successfulCounter !== ""
        ) {
          objTimeVars.sumClient += parseInt(data[i].time);
          if (data[i].successfulRequest === true) {
            objTimeVars.successCliente++;
          } else {
            objTimeVars.errorCliente++;
          }
        }
        if (
          data[i].stepslug === "Resumen" &&
          data[i].successfulCounter !== ""
        ) {
          objTimeVars.sumResumen += parseInt(data[i].time);
          if (data[i].successfulRequest === true) {
            objTimeVars.successResumen++;
          } else {
            objTimeVars.errorResumen++;
          }
        }
        if (
          data[i].stepslug === "Factura" &&
          data[i].successfulCounter !== ""
        ) {
          objTimeVars.sumFactura += parseInt(data[i].time);
          if (data[i].successfulRequest === true) {
            objTimeVars.successFactura++;
          } else {
            objTimeVars.errorFactura++;
          }
        }
      }
      avgTime = (sumTime / (errorCounter + successfulCounter)).toFixed(3);
      objTimeVars.avgCliente = (
        objTimeVars.sumClient /
        (objTimeVars.errorCliente + objTimeVars.successCliente)
      ).toFixed(3);
      objTimeVars.avgResumen = (
        objTimeVars.sumResumen /
        (objTimeVars.errorResumen + objTimeVars.successResumen)
      ).toFixed(3);
      objTimeVars.avgFactura = (
        objTimeVars.sumFactura /
        (objTimeVars.errorFactura + objTimeVars.successFactura)
      ).toFixed(3);

      this.avgTicket = isNaN(avgTime) ? 0 : avgTime;
      this.successTicketCounter = successfulCounter;
      this.errorTicketCounter = errorCounter;
      this.avgCliente = isNaN(objTimeVars.avgCliente)
        ? 0
        : objTimeVars.avgCliente;
      this.avgResumen = isNaN(objTimeVars.avgResumen)
        ? 0
        : objTimeVars.avgResumen;
      this.avgFactura = isNaN(objTimeVars.avgFactura)
        ? 0
        : objTimeVars.avgFactura;
      this.successClienteCounter = objTimeVars.successCliente;
      this.successResumenCounter = objTimeVars.successResumen;
      this.successFacturaCounter = objTimeVars.successFactura;
      this.errorClienteCounter = objTimeVars.errorCliente;
      this.errorResumenCounter = objTimeVars.errorResumen;
      this.errorFacturaCounter = objTimeVars.errorFactura;
      this.isLoading = false;
    },
    getStats() {
      try {
        this.isLoading = true;
        let self = this;
        console.log("getStats -self:", self);
        let str = `
        var urlMode=null;
      
        require(['N/url'],function(urlMode){
          var url=urlMode.resolveScript({
            scriptId:'customscript_efx_fe_kioskopageload_sl',
            deploymentId:"customdeploy_efx_fe_kioskopageload_sl",
            returnExternalUrl:false,
            params:{getPageTimer:true}
          });
          self.getStatsResponse(url)
        });
        `;
        eval(str);
      } catch (err) {
        console.log(err);
      }
    },
    getStatsResponse(e) {
      const t = {
        method: "GET",
        url: e,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
          "Access-Control-Allow-Headers": "authorization",
        },
      };
      axios
        .request(t)
        .then((b) => {
          console.log("RESP time full stats: ", b.data);
          this.processData(b.data);

          this.filterByMonthAndTicket(b.data);
          this.anualAllSteps(b.data);
          this.getStatsTime(b.data);
          let response_filterErrorsWeekly = filterErrorsWeekly(b.data);
          this.seriesArea_error.push({
            data: [...response_filterErrorsWeekly],
            name: "Errores",
          });
        })
        .catch((err) => {
          console.log("Hubo errores: ", err);
        });
    },
    anualAllSteps(data) {
      try {
        let response = filterAnualAllSteps(data);
        this.seriesColumn.push({
          name: "Ticket",
          data: response.avgTicket,
        });
        this.seriesColumn.push({
          name: "Cliente",
          data: response.avgCliente,
        });
        this.seriesColumn.push({
          name: "Resumen",
          data: response.avgResumen,
        });
        this.seriesColumn.push({
          name: "Factura",
          data: response.avgFcatura,
        });
        console.log("ARR ticket step anual:", this.seriesColumn);
      } catch (err) {
        console.log(err);
      }
    },
    filterByMonthAndTicket(data) {
      try {
        let d = new Date();
        let currentMonth = d.getMonth() + 1;
        let arr_ticketStep_currentMonth = [];
        let countTimes_perDay = {
          day1: 0,
          day2: 0,
          day3: 0,
          day4: 0,
          day5: 0,
          day6: 0,
          day7: 0,
          day8: 0,
          day9: 0,
          day10: 0,
          day11: 0,
          day12: 0,
          day13: 0,
          day14: 0,
          day15: 0,
          day16: 0,
          day17: 0,
          day18: 0,
          day19: 0,
          day20: 0,
          day21: 0,
          day22: 0,
          day23: 0,
          day24: 0,
          day25: 0,
          day26: 0,
          day27: 0,
          day28: 0,
          day29: 0,
          day30: 0,
          day31: 0,
        };
        let sum = {
          day1: 0,
          day2: 0,
          day3: 0,
          day4: 0,
          day5: 0,
          day6: 0,
          day7: 0,
          day8: 0,
          day9: 0,
          day10: 0,
          day11: 0,
          day12: 0,
          day13: 0,
          day14: 0,
          day15: 0,
          day16: 0,
          day17: 0,
          day18: 0,
          day19: 0,
          day20: 0,
          day21: 0,
          day22: 0,
          day23: 0,
          day24: 0,
          day25: 0,
          day26: 0,
          day27: 0,
          day28: 0,
          day29: 0,
          day30: 0,
          day31: 0,
        };
        let avg_per_day = [];

        for (let i in data) {
          let date = data[i].date;
          let splittedDate = date.split("-");
          let convertedMonthNum = parseInt(splittedDate[1]);
          // console.log("convertedMonthNum:" + convertedMonthNum);
          // console.log("splittedDate:" + splittedDate);
          // console.log("splittedDate[1]:" + splittedDate[1]);
          // console.log("date:" + date);
          // console.log("currentMonth:" + currentMonth);
          if (
            data[i].stepslug === "Ticket" &&
            convertedMonthNum === currentMonth
          ) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);

            switch (daySplitted) {
              case 1:
                sum.day1 += parseInt(data[i].time);
                countTimes_perDay.day1++;
                break;
              case 2:
                sum.day2 += parseInt(data[i].time);
                countTimes_perDay.day2++;
                break;
              case 3:
                sum.day3 += parseInt(data[i].time);
                countTimes_perDay.day3++;
                break;
              case 4:
                sum.day4 += parseInt(data[i].time);
                countTimes_perDay.day4++;
                break;
              case 5:
                sum.day5 += parseInt(data[i].time);
                countTimes_perDay.day5++;
                break;
              case 6:
                sum.day6 += parseInt(data[i].time);
                countTimes_perDay.day6++;
                break;
              case 7:
                sum.day7 += parseInt(data[i].time);
                countTimes_perDay.day7++;
                break;
              case 8:
                sum.day8 += parseInt(data[i].time);
                countTimes_perDay.day8++;
                break;
              case 9:
                sum.day9 += parseInt(data[i].time);
                countTimes_perDay.day9++;
                break;
              case 10:
                sum.day10 += parseInt(data[i].time);
                countTimes_perDay.day10++;
                break;
              case 11:
                sum.day11 += parseInt(data[i].time);
                countTimes_perDay.day11++;
                break;
              case 12:
                sum.day12 += parseInt(data[i].time);
                countTimes_perDay.day12++;
                break;
              case 13:
                sum.day13 += parseInt(data[i].time);
                countTimes_perDay.day13++;
                break;
              case 14:
                sum.day14 += parseInt(data[i].time);
                countTimes_perDay.day14++;
                break;
              case 15:
                sum.day15 += parseInt(data[i].time);
                countTimes_perDay.day15++;
                break;
              case 16:
                sum.day16 += parseInt(data[i].time);
                countTimes_perDay.day16++;
                break;
              case 17:
                sum.day17 += parseInt(data[i].time);
                countTimes_perDay.day17++;
                break;
              case 18:
                sum.day18 += parseInt(data[i].time);
                countTimes_perDay.day18++;
                break;
              case 19:
                sum.day19 += parseInt(data[i].time);
                countTimes_perDay.day19++;
                break;
              case 20:
                sum.day20 += parseInt(data[i].time);
                countTimes_perDay.day20++;
                break;
              case 21:
                sum.day21 += parseInt(data[i].time);
                countTimes_perDay.day21++;
                break;
              case 22:
                sum.day22 += parseInt(data[i].time);
                countTimes_perDay.day22++;
                break;
              case 23:
                sum.day23 += parseInt(data[i].time);
                countTimes_perDay.day23++;
                break;
              case 24:
                sum.day24 += parseInt(data[i].time);
                countTimes_perDay.day24++;
                break;
              case 25:
                sum.day25 += parseInt(data[i].time);
                countTimes_perDay.day25++;
                break;
              case 26:
                sum.day26 += parseInt(data[i].time);
                countTimes_perDay.day26++;
                break;
              case 27:
                sum.day27 += parseInt(data[i].time);
                countTimes_perDay.day27++;
                break;
              case 28:
                sum.day28 += parseInt(data[i].time);
                countTimes_perDay.day28++;
                break;
              case 29:
                sum.day29 += parseInt(data[i].time);
                countTimes_perDay.day29++;
                break;
              case 30:
                sum.day30 += parseInt(data[i].time);
                countTimes_perDay.day30++;
                break;
              case 31:
                sum.day31 += parseInt(data[i].time);
                countTimes_perDay.day31++;
                break;
            }

            // for(let day =1;day<=31;day++){
            //   if(day===daySplitted){
            //     sum+=data[i].time;
            //   }
            // }
            arr_ticketStep_currentMonth.push(parseFloat(data[i].time));
          }
        }
        for (let keyDay in sum) {
          if (countTimes_perDay[keyDay] === 0) {
            avg_per_day.push(0);
          } else {
            let avg = sum[keyDay] / countTimes_perDay[keyDay];
            avg_per_day.push(avg);
          }
          console.log("keyDay sum:",sum[keyDay]);
          console.log("keyDay in counter:",countTimes_perDay[keyDay]);
        }
        console.log("Promedio de tiempos del dia:", countTimes_perDay);
        console.log("Suma de tiempos:", sum);
        this.seriesArea.push({
          data: [...avg_per_day],
          name: "Tiempo (ms)",
        });

        // console.log("Array by filter of month and ticket:", this.seriesArea);
      } catch (err) {
        console.log("Error:", err);
      }
    },
    getDaysOfMonth() {
      const month = [
        "EN",
        "FE",
        "MA",
        "AB",
        "MY",
        "JN",
        "JL",
        "AG",
        "SE",
        "OC",
        "NO",
        "DI",
      ];
      const d = new Date();
      let name = month[d.getMonth()];
      let daysLimit = 0;
      switch (d.getMonth()) {
        case 1:
          daysLimit = 31;
          break;
        case 2:
          daysLimit = 28;
          break;
        case 3:
          daysLimit = 31;
          break;
        case 4:
          daysLimit = 30;
          break;
        case 5:
          daysLimit = 31;
          break;
        case 6:
          daysLimit = 30;
          break;
        case 7:
          daysLimit = 31;
          break;
        case 8:
          daysLimit = 31;
          break;
        case 9:
          daysLimit = 30;
          break;
        case 10:
          daysLimit = 31;
          break;
        case 11:
          daysLimit = 30;
          break;
        case 12:
          daysLimit = 31;
          break;
      }
      let returnDaysMonth = [];
      for (let i = 1; i <= daysLimit; i++) {
        returnDaysMonth.push(
          name + " " + i + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()
        );
      }
      return returnDaysMonth;
    },
    processData(data) {
      try {
        data.forEach((element) => {
          if (element.date) {
            console.log("timeZone from NS:",this.timeZone);
            const date = new Date(element.date);

            const options = {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              timeZone: this.timeZone,
              timeZoneName: "short"
            };

            const formattedDate = date.toLocaleString("en-US", options);
            element.date_aux=formattedDate;
            // element.date=formattedDate;
            // console.log("TIMEZONE: ",this.timeZone);
            // console.log("FORMATTEDDATE: ",element.date);
          }
        });
        this.objData=data;
      } catch (err) {
        console.log("Error on processData:", err);
      }
    },
    getTimeZone() {
      try {
        let self = this;
        console.log("getTimeZone -self:", self);
        let str = `
        var urlMode=null;
      
        require(['N/url'],function(urlMode){
          var url=urlMode.resolveScript({
            scriptId:'customscript_efx_fe_kioskopageload_sl',
            deploymentId:"customdeploy_efx_fe_kioskopageload_sl",
            returnExternalUrl:false,
            params:{getTimeZone:true}
          });
          self.getTimeZoneResponse(url)
        });
        `;
        eval(str);
      } catch (err) {
        console.log(err);
      }
    },
    getTimeZoneResponse(e) {
      const t = {
        method: "GET",
        url: e,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,OPTIONS",
          "Access-Control-Allow-Headers": "authorization",
        },
      };
      axios
        .request(t)
        .then((b) => {
          console.log("getTimeZoneResponse:",b.data);
          this.timeZone = b.data;
          this.getStats();
        })
        .catch((err) => {
          console.error("Hubo errores getTimeZoneResponse: ", err);
        });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/styles.scss";
</style>

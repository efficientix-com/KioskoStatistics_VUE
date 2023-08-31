<template>
  <div id="Datatable-component">
    <div>
      <table class="table" id="datatableComp"></table>
    </div>
  </div>
</template>
    <script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-responsive-dt";
import "datatables.net-dt/js/dataTables.dataTables";
import DataTable from "datatables.net-dt";

export default {
  name: "DatatableComponent",
  data: function () {
    return {
      datatable: null,
      formattedDates: [],
    };
  },
  props: { data: { type: Array, required: true } },
  watch: {
    data(newData) {
      if (this.datatable) {
        this.datatable.clear();
        this.datatable.rows.add(newData);
        this.datatable.draw();
      }
    },
  },
  mounted() {
    this.datatable = new DataTable(`#datatableComp`, {
      responsive: true,
      data: this.data,
      buttons:['excel'],
      columns: [
        { data: "stepslug", title: "Paso" , render:function(data){
          if(data==='Ticket'){
            return '<div class="cheto ticket" >' + data + "</div>";
          }else if(data==='Cliente'){
            return '<div class="cheto cliente" >' + data + "</div>";
          }else if(data==='Resumen'){
            return '<div class="cheto resumen" >' + data + "</div>";
          }else if(data==='Factura'){
            return '<div class="cheto factura" >' + data + "</div>";

          }else{
            return '<div class="cheto default" >' + data + "</div>";

          }
        }},
        {
          data: "date_aux",
          title: "Fecha",
          // render: function (data) {
          //   const date = new Date(data);

          //   const options = {
          //     day: "2-digit",
          //     month: "2-digit",
          //     year: "numeric",
          //     hour: "2-digit",
          //     minute: "2-digit",
          //     second: "2-digit",
          //     timeZone:timeZone
          //   };

          //   const formattedDate = date.toLocaleString("en-GB", options);
          //   return formattedDate;
          // },
        },
        {
          data: "successfulRequest",
          title: "Estatus",
          render: function (data) {
            let content = "";
            if (data === true) {
              content = "Éxito";
              return '<div class="cheto" >' + content + "</div>";
            } else {
              content = "Error";
              return '<div class="cheto error" >' + content + "</div>";
            }
          },
        },
        { data: "message", title: "Detalles" },
        { data: "ticket_id", title: "Ticket" },
        { data: "ticket_date", title: "Fecha de Ticket" },
        { data: "ticket_rfc", title: "RFC de Ticket" },
        { data: "ticket_cantidad", title: "Cantidad en Ticket" ,render:function(data){
          return "<div>$ "+data+"</div>";

        }},
      ],
      order: [
        [1, "desc"],
        [2, "asc"],
      ],
    });
  },
  methods: {
    
  },
};
</script>
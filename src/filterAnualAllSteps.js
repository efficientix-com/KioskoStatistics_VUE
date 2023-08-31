export const filterAnualAllSteps = (data) => {

    let sum = {
        ticket: {
            enero: 0,
            febrero: 0,
            marzo: 0,
            abril: 0,
            mayo: 0,
            junio: 0,
            julio: 0,
            agosto: 0,
            septiembre: 0,
            octubre: 0,
            noviembre: 0,
            diciembre: 0,
        },
        cliente: {
            enero: 0,
            febrero: 0,
            marzo: 0,
            abril: 0,
            mayo: 0,
            junio: 0,
            julio: 0,
            agosto: 0,
            septiembre: 0,
            octubre: 0,
            noviembre: 0,
            diciembre: 0,
        },
        resumen: {
            enero: 0,
            febrero: 0,
            marzo: 0,
            abril: 0,
            mayo: 0,
            junio: 0,
            julio: 0,
            agosto: 0,
            septiembre: 0,
            octubre: 0,
            noviembre: 0,
            diciembre: 0,
        },
        factura: {
            enero: 0,
            febrero: 0,
            marzo: 0,
            abril: 0,
            mayo: 0,
            junio: 0,
            julio: 0,
            agosto: 0,
            septiembre: 0,
            octubre: 0,
            noviembre: 0,
            diciembre: 0,
        },
    };
    let counter = {
        ticket: {
            enero: 0,
            febrero: 0,
            marzo: 0,
            abril: 0,
            mayo: 0,
            junio: 0,
            julio: 0,
            agosto: 0,
            septiembre: 0,
            octubre: 0,
            noviembre: 0,
            diciembre: 0,
        },
        cliente: {
            enero: 0,
            febrero: 0,
            marzo: 0,
            abril: 0,
            mayo: 0,
            junio: 0,
            julio: 0,
            agosto: 0,
            septiembre: 0,
            octubre: 0,
            noviembre: 0,
            diciembre: 0,
        },
        resumen: {
            enero: 0,
            febrero: 0,
            marzo: 0,
            abril: 0,
            mayo: 0,
            junio: 0,
            julio: 0,
            agosto: 0,
            septiembre: 0,
            octubre: 0,
            noviembre: 0,
            diciembre: 0,
        },
        factura: {
            enero: 0,
            febrero: 0,
            marzo: 0,
            abril: 0,
            mayo: 0,
            junio: 0,
            julio: 0,
            agosto: 0,
            septiembre: 0,
            octubre: 0,
            noviembre: 0,
            diciembre: 0,
        },
    };

    for (let i in data) {
        let date = data[i].date;
        let splittedDate = date.split("-");
        let convertedMonthNum = parseInt(splittedDate[1]);
        if (convertedMonthNum === 1) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);
            if (data[i].stepslug === "Ticket") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.ticket.enero += parseInt(data[i].time);
                        counter.ticket.enero++;
                    }
                }
            }
            if (data[i].stepslug === "Cliente") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.cliente.enero += parseInt(data[i].time);
                        counter.cliente.enero++;
                    }
                }
            }
            if (data[i].stepslug === "Resumen") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.resumen.enero += parseInt(data[i].time);
                        counter.resumen.enero++;
                    }
                }
            }
            if (data[i].stepslug === "Factura") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.factura.enero += parseInt(data[i].time);
                        counter.factura.enero++;
                    }
                }
            }
        }
        if (convertedMonthNum === 2) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);
            if (data[i].stepslug === "Ticket") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.ticket.febrero += parseInt(data[i].time);
                        counter.ticket.febrero++;
                    }
                }
            }
            if (data[i].stepslug === "Cliente") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.cliente.febrero += parseInt(data[i].time);
                        counter.cliente.febrero++;
                    }
                }
            }
            if (data[i].stepslug === "Resumen") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.resumen.febrero += parseInt(data[i].time);
                        counter.resumen.febrero++;
                    }
                }
            }
            if (data[i].stepslug === "Factura") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.factura.febrero += parseInt(data[i].time);
                        counter.factura.febrero++;
                    }
                }
            }
        }
        if (convertedMonthNum === 3) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);
            if (data[i].stepslug === "Ticket") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.ticket.marzo += parseInt(data[i].time);
                        counter.ticket.marzo++;
                    }
                }
            }
            if (data[i].stepslug === "Cliente") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.cliente.marzo += parseInt(data[i].time);
                        counter.cliente.marzo++;
                    }
                }
            }
            if (data[i].stepslug === "Resumen") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.resumen.marzo += parseInt(data[i].time);
                        counter.resumen.marzo++;
                    }
                }
            }
            if (data[i].stepslug === "Factura") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.factura.marzo += parseInt(data[i].time);
                        counter.factura.marzo++;
                    }
                }
            }
        }
        if (convertedMonthNum === 4) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);
            if (data[i].stepslug === "Ticket") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.ticket.abril += parseInt(data[i].time);
                        counter.ticket.abril++;
                    }
                }
            }
            if (data[i].stepslug === "Cliente") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.cliente.abril += parseInt(data[i].time);
                        counter.cliente.abril++;
                    }
                }
            }
            if (data[i].stepslug === "Resumen") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.resumen.abril += parseInt(data[i].time);
                        counter.resumen.abril++;
                    }
                }
            }
            if (data[i].stepslug === "Factura") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.factura.abril += parseInt(data[i].time);
                        counter.factura.abril++;
                    }
                }
            }
        }
        if (convertedMonthNum === 5) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);
            if (data[i].stepslug === "Ticket") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.ticket.mayo += parseInt(data[i].time);
                        counter.ticket.mayo++;
                    }
                }
            }
            if (data[i].stepslug === "Cliente") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.cliente.mayo += parseInt(data[i].time);
                        counter.cliente.mayo++;
                    }
                }
            }
            if (data[i].stepslug === "Resumen") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.resumen.mayo += parseInt(data[i].time);
                        counter.resumen.mayo++;
                    }
                }
            }
            if (data[i].stepslug === "Factura") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.factura.mayo += parseInt(data[i].time);
                        counter.factura.mayo++;
                    }
                }
            }
        }
        if (convertedMonthNum === 6) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);
            if (data[i].stepslug === "Ticket") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.ticket.junio += parseInt(data[i].time);
                        counter.ticket.junio++;
                    }
                }
            }
            if (data[i].stepslug === "Cliente") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.cliente.junio += parseInt(data[i].time);
                        counter.cliente.junio++;
                    }
                }
            }
            if (data[i].stepslug === "Resumen") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.resumen.junio += parseInt(data[i].time);
                        counter.resumen.junio++;
                    }
                }
            }
            if (data[i].stepslug === "Factura") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.factura.junio += parseInt(data[i].time);
                        counter.factura.junio++;
                    }
                }
            }
        }
        if (convertedMonthNum === 7) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);
            if (data[i].stepslug === "Ticket") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.ticket.julio += parseInt(data[i].time);
                        counter.ticket.julio++;
                    }
                }
            }
            if (data[i].stepslug === "Cliente") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.cliente.julio += parseInt(data[i].time);
                        counter.cliente.julio++;
                    }
                }
            }
            if (data[i].stepslug === "Resumen") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.resumen.julio += parseInt(data[i].time);
                        counter.resumen.julio++;
                    }
                }
            }
            if (data[i].stepslug === "Factura") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.factura.julio += parseInt(data[i].time);
                        counter.factura.julio++;
                    }
                }
            }
        }
        if (convertedMonthNum === 8) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);
            if (data[i].stepslug === "Ticket") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.ticket.agosto += parseInt(data[i].time);
                        counter.ticket.agosto++;
                    }
                }
            }
            if (data[i].stepslug === "Cliente") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.cliente.agosto += parseInt(data[i].time);
                        counter.cliente.agosto++;
                    }
                }
            }
            if (data[i].stepslug === "Resumen") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.resumen.agosto += parseInt(data[i].time);
                        counter.resumen.agosto++;
                    }
                }
            }
            if (data[i].stepslug === "Factura") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.factura.agosto += parseInt(data[i].time);
                        counter.factura.agosto++;
                    }
                }
            }
        }
        if (convertedMonthNum === 9) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);
            if (data[i].stepslug === "Ticket") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.ticket.septiembre += parseInt(data[i].time);
                        counter.ticket.septiembre++;
                    }
                }
            }
            if (data[i].stepslug === "Cliente") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.cliente.septiembre += parseInt(data[i].time);
                        counter.cliente.septiembre++;
                    }
                }
            }
            if (data[i].stepslug === "Resumen") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.resumen.septiembre += parseInt(data[i].time);
                        counter.resumen.septiembre++;
                    }
                }
            }
            if (data[i].stepslug === "Factura") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.factura.septiembre += parseInt(data[i].time);
                        counter.factura.septiembre++;
                    }
                }
            }
        }
        if (convertedMonthNum === 10) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);
            if (data[i].stepslug === "Ticket") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.ticket.octubre += parseInt(data[i].time);
                        counter.ticket.octubre++;
                    }
                }
            }
            if (data[i].stepslug === "Cliente") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.cliente.octubre += parseInt(data[i].time);
                        counter.cliente.octubre++;
                    }
                }
            }
            if (data[i].stepslug === "Resumen") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.resumen.octubre += parseInt(data[i].time);
                        counter.resumen.octubre++;
                    }
                }
            }
            if (data[i].stepslug === "Factura") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.factura.octubre += parseInt(data[i].time);
                        counter.factura.octubre++;
                    }
                }
            }
        }
        if (convertedMonthNum === 11) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);
            if (data[i].stepslug === "Ticket") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.ticket.noviembre += parseInt(data[i].time);
                        counter.ticket.noviembre++;
                    }
                }
            }
            if (data[i].stepslug === "Cliente") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.cliente.noviembre += parseInt(data[i].time);
                        counter.cliente.noviembre++;
                    }
                }
            }
            if (data[i].stepslug === "Resumen") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.resumen.noviembre += parseInt(data[i].time);
                        counter.resumen.noviembre++;
                    }
                }
            }
            if (data[i].stepslug === "Factura") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.factura.noviembre += parseInt(data[i].time);
                        counter.factura.noviembre++;
                    }
                }
            }
        }
        if (convertedMonthNum === 12) {
            let day_time = splittedDate[2].split("T");
            let daySplitted = parseInt(day_time[0]);
            if (data[i].stepslug === "Ticket") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.ticket.diciembre += parseInt(data[i].time);
                        counter.ticket.diciembre++;
                    }
                }
            }
            if (data[i].stepslug === "Cliente") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.cliente.diciembre += parseInt(data[i].time);
                        counter.cliente.diciembre++;
                    }
                }
            }
            if (data[i].stepslug === "Resumen") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.resumen.diciembre += parseInt(data[i].time);
                        counter.resumen.diciembre++;
                    }
                }
            }
            if (data[i].stepslug === "Factura") {
                for (let day = 1; day <= 31; day++) {
                    if (day === daySplitted) {
                        sum.factura.diciembre += parseInt(data[i].time);
                        counter.factura.diciembre++;
                    }
                }
            }
        }
    }
    let avgTicket = [];
    let avgCliente = [];
    let avgResumen = [];
    let avgFcatura = [];
    for (let i in sum) {
        if (i === "ticket") {
            for (let j in sum[i]) {
                if (counter[i][j] !== 0) {
                    avgTicket.push(sum[i][j] / counter[i][j]);
                } else {
                    avgTicket.push(0);
                }
            }
        }
        if (i === "cliente") {
            for (let j in sum[i]) {
                if (counter[i][j] !== 0) {
                    avgCliente.push(sum[i][j] / counter[i][j]);
                } else {
                    avgCliente.push(0);
                }
            }
        }
        if (i === "resumen") {

            for (let j in sum[i]) {
                if (counter[i][j] !== 0) {
                    avgResumen.push(sum[i][j] / counter[i][j]);
                } else {
                    avgResumen.push(0);
                }
            }
        }
        if (i === "factura") {

            for (let j in sum[i]) {
                if (counter[i][j] !== 0) {
                    avgFcatura.push(sum[i][j] / counter[i][j]);
                } else {
                    avgFcatura.push(0);
                }
            }
        }
    }
    let response = {
        avgTicket: avgTicket,
        avgCliente: avgCliente,
        avgResumen: avgResumen,
        avgFcatura: avgFcatura
    }
    return response;
}
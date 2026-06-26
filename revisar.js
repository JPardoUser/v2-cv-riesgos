// SVGs for checklist states
const checklistStateSVGs = {
  'Conforme': `<svg style="width: 14px; height: 14px; fill: #16a34a; vertical-align: middle; margin-right: 0.25rem;" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
  'Observado': `<svg style="width: 14px; height: 14px; fill: #ea580c; vertical-align: middle; margin-right: 0.25rem;" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
  'No conforme': `<svg style="width: 14px; height: 14px; fill: #dc2626; vertical-align: middle; margin-right: 0.25rem;" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>`,
  'Rechazado': `<svg style="width: 14px; height: 14px; fill: #dc2626; vertical-align: middle; margin-right: 0.25rem;" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>`,
  'Subsanado': `<svg style="width: 14px; height: 14px; fill: #7c3aed; vertical-align: middle; margin-right: 0.25rem;" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
  'Pendiente': `<svg style="width: 14px; height: 14px; fill: #64748b; vertical-align: middle; margin-right: 0.25rem;" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
  'No aplica': `<svg style="width: 14px; height: 14px; fill: none; stroke: #94a3b8; stroke-width: 2.5; vertical-align: middle; margin-right: 0.25rem;" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>`
};

// Retrieve records from localStorage or default
let localRecords = [];
let urlParams = null;
let solicitudId = '';
let record = null;

// Format date into DD/MM/YYYY HH:mm
function formatDateSlash(dateStr) {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Helper function to parse currency strings to numbers
function parseCurrency(val) {
  if (!val) return 0;
  const clean = val.replace(/[S/$\s,]/g, '');
  return parseFloat(clean) || 0;
}

// Generate unique detailed information dynamically based on Solicitud
function getRecordExtraDetails(r) {
  // Hardcoded for EFE005 to match user uploaded mockup exactly
  if (r.solicitud === 'EFE005') {
    return {
      dni: '43134567',
      estadoCivil: 'Casado',
      nacimiento: '15/08/1985',
      telefono: '987 654 321',
      email: 'juan.perez@email.com',
      direccion: 'Av. Los Constructores 123, San Miguel - Lima',
      ingresosForm: {
        titular: {
          perfil: 'formal',
          situacionLaboral: 'dependiente',
          tipoIngreso: 'formal',
          oficioProfesion: 'ingeniero',
          fechaIngreso: '01/01/2020',
          rucEmpleador: '20705695330',
          moneda: 'Dólares',
          ingresoMensual: '$ 3,000.00',
          anualizacion: '12 sueldos'
        },
        conyuge: {
          perfil: 'informal',
          situacionLaboral: 'independiente',
          tipoIngreso: 'costeo',
          oficioProfesion: 'BODEGERO',
          fechaIngreso: '02/01/2010',
          rucEmpleador: '10705695330',
          moneda: 'Soles',
          ingresoMensual: 'S/ 5,000.00',
          anualizacion: '12 sueldos'
        }
      },
      credito: {
        monto: '$ 138,000.00',
        moneda: 'Dólares',
        plazo: '36 meses',
        campana: 'Campaña Toyota Full 2026',
        tea: '14.90%',
        tcea: '16.74%',
        cuota: '$ 4,123.00',
        inicial: '$ 5,000.00'
      },
      vehiculo: {
        desc: 'Toyota Fortuner SRX 2024',
        estado: 'Nuevo',
        marca: 'Toyota',
        modelo: 'Fortuner SRX',
        ano: '2024',
        precio: '$ 168,900.00',
        concesionario: 'Toyota',
        tienda: 'San Miguel',
        vin: 'BAIDAA3GS12345678'
      },
      capacidad: {
        rci: '45%',
        ingresos: '$ 9,850.00',
        maxima: '$ 4,432.50',
        disponible: '$ 3,332.50',
        cuota: '$ 4,123.00',
        aplica: 'No'
      },
      deudasTitular: [
        { entidad: 'BCP - Tarjeta de crédito', tipo: 'Tarjeta de crédito', saldo: '$ 4,560.00', cargaMes: '$ 280.00', cargaSust: '$ 280.00' },
        { entidad: 'Financiera ABC - Préstamo personal', tipo: 'Financiera', saldo: '$ 6,800.00', cargaMes: '$ 370.00', cargaSust: '$ 370.00' },
        { entidad: 'Toyota Credit - Crédito vehicular', tipo: 'Financiera', saldo: '$ 0.00', cargaMes: '$ 0.00', cargaSust: '$ 0.00' }
      ],
      deudasConyuge: [
        { entidad: 'Interbank - Tarjeta de crédito', tipo: 'Tarjeta de crédito', saldo: '$ 3,200.00', cargaMes: '$ 450.00', cargaSust: '$ 450.00' }
      ],
      deudasTitularTotal: '$ 650.00',
      deudasConyugeTotal: '$ 450.00',
      deudasCombinadoTotal: '$ 1,100.00',
      checklist: [
        { n: 1, doc: 'DNI del titular', oblig: 'Sí', estado: 'Conforme', obs: '—' },
        { n: 2, doc: 'Boletas de pago (últimos 3 meses)', oblig: 'Sí', estado: 'Conforme', obs: '—' },
        { n: 3, doc: 'Constancia de trabajo / Certificado laboral', oblig: 'Sí', estado: 'Conforme', obs: '—' },
        { n: 4, doc: 'Estados de cuenta (últimos 3 meses)', oblig: 'Sí', estado: 'Conforme', obs: '—' },
        { n: 5, doc: 'Documentos de deudas vigentes', oblig: 'Sí', estado: 'Conforme', obs: '—' },
        { n: 6, doc: 'DNI del cónyuge (si aplica)', oblig: 'No', estado: 'No aplica', obs: '—' },
        { n: 7, doc: 'Boletas de pago del cónyuge (últimos 3 meses)', oblig: 'No', estado: 'No aplica', obs: '—' },
        { n: 8, doc: 'Hoja resumen de evaluación externa (si aplica)', oblig: 'No', estado: 'Rechazado', obs: 'Hoja de evaluación externa rechazada por firmas ilegibles.' }
      ],
      execComments: [
        "Cliente enviado a evaluación por 4x4 / Full.",
        "Sin capacidad para la cuota seleccionada.",
        "Ingreso declarado: $ 7,050.00",
        "RCI calculado: 45%",
        "Cliente indica que puede aumentar cuota inicial."
      ]
    };
  } else if (r.solicitud === 'EFE006') {
    return {
      dni: '48765432',
      estadoCivil: 'Casado',
      nacimiento: '12/11/1988',
      telefono: '986 543 210',
      email: 'felipe.perez@email.com',
      direccion: 'Av. Javier Prado Este 2500, San Borja - Lima',
      ingresosForm: {
        titular: {
          perfil: 'formal',
          situacionLaboral: 'dependiente',
          tipoIngreso: 'formal',
          oficioProfesion: 'ingeniero de sistemas',
          fechaIngreso: '01/04/2022',
          rucEmpleador: '20601234567',
          moneda: 'Soles',
          ingresoMensual: 'S/ 4,800.00',
          anualizacion: '12 sueldos'
        },
        conyuge: {
          perfil: 'formal',
          situacionLaboral: 'dependiente',
          tipoIngreso: 'formal',
          oficioProfesion: 'consultora',
          fechaIngreso: '15/09/2021',
          rucEmpleador: '20509876543',
          moneda: 'Soles',
          ingresoMensual: 'S/ 3,500.00',
          anualizacion: '12 sueldos'
        }
      },
      credito: {
        monto: '$ 18,500.00',
        moneda: 'Dólares',
        plazo: '36 meses',
        campana: 'Campaña Hyundai Tucson 2026',
        tea: '13.90%',
        tcea: '15.65%',
        cuota: '$ 650.00',
        inicial: '$ 4,000.00'
      },
      vehiculo: {
        desc: 'Hyundai Tucson Comfort 2024',
        estado: 'Nuevo',
        marca: 'HYUNDAI',
        modelo: 'Tucson',
        ano: '2024',
        precio: '$ 22,500.00',
        concesionario: 'HYUNDAI',
        tienda: 'Puruchuco',
        vin: 'KMHJH81D1JU123456'
      },
      capacidad: {
        rci: '35%',
        ingresos: 'S/ 8,300.00',
        maxima: 'S/ 3,735.00',
        disponible: 'S/ 3,235.00',
        cuota: 'S/ 2,405.00',
        aplica: 'Sí'
      },
      deudasTitular: [
        { entidad: 'Interbank - Préstamo Personal', tipo: 'Financiera', saldo: 'S/ 5,000.00', cargaMes: 'S/ 350.00', cargaSust: 'S/ 350.00' }
      ],
      deudasConyuge: [
        { entidad: 'BCP - Tarjeta de Crédito', tipo: 'Tarjeta de crédito', saldo: 'S/ 1,500.00', cargaMes: 'S/ 150.00', cargaSust: 'S/ 150.00' }
      ],
      deudasTitularTotal: 'S/ 350.00',
      deudasConyugeTotal: 'S/ 150.00',
      deudasCombinadoTotal: 'S/ 500.00',
      checklist: [
        { n: 1, doc: 'DNI del titular', oblig: 'Sí', estado: 'Conforme', obs: '—' },
        { n: 2, doc: 'Boletas de pago (últimos 3 meses)', oblig: 'Sí', estado: 'Conforme', obs: '—' },
        { n: 3, doc: 'Constancia de trabajo / Certificado laboral', oblig: 'Sí', estado: 'Conforme', obs: '—' },
        { n: 4, doc: 'Estados de cuenta (últimos 3 meses)', oblig: 'Sí', estado: 'Conforme', obs: '—' },
        { n: 5, doc: 'DNI del cónyuge (si aplica)', oblig: 'No', estado: 'Conforme', obs: '—' },
        { n: 6, doc: 'Boletas de pago del cónyuge (últimos 3 meses)', oblig: 'No', estado: 'Subsanado', obs: 'Se procedió a subir la boleta de pago de la cónyuge de abril en la sección ingresos y checklist. Por favor continuar evaluación.' }
      ],
      execComments: [
        "Falta adjuntar boletas de pago del cónyuge correspondientes al mes de abril para sustentar ingresos declarados.",
        "Se procedió a subir la boleta de pago de la cónyuge de abril en la sección ingresos y checklist. Por favor continuar evaluación."
      ]
    };
  }

  // Fallback defaults for other requests
  const hash = (r.solicitud || '').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const isToyota = r.concesionario === 'TOYOTA';
  const isApproved = r.estado === 'Aprobado';
  const isMarried = hash % 2 === 0;
  
  const requestedVal = 20000 + (hash % 10) * 8000;
  const incomeVal = 3000 + (hash % 10) * 800;
  const cuotaVal = 500 + (hash % 5) * 200;
  const rciVal = Math.round((cuotaVal / incomeVal) * 100);

  return {
    dni: r.nDocumento,
    estadoCivil: isMarried ? 'Casado' : 'Soltero',
    nacimiento: '22/10/1990',
    telefono: '999 888 777',
    email: `${(r.nombreCliente || '').toLowerCase().split(' ')[0]}@email.com`,
    direccion: 'Calle Las Orquídeas 456, San Isidro - Lima',
    ingresosForm: {
      titular: {
        perfil: 'formal',
        situacionLaboral: 'dependiente',
        tipoIngreso: 'formal',
        oficioProfesion: 'analista',
        fechaIngreso: '01/06/2022',
        rucEmpleador: '20505555555',
        moneda: 'Soles',
        ingresoMensual: 'S/ 3,800.00',
        anualizacion: '12 sueldos'
      },
      conyuge: {
        perfil: 'informal',
        situacionLaboral: 'independiente',
        tipoIngreso: 'costeo',
        oficioProfesion: 'comerciante',
        fechaIngreso: '12/10/2021',
        rucEmpleador: '10505555555',
        moneda: 'Soles',
        ingresoMensual: 'S/ 2,800.00',
        anualizacion: '12 sueldos'
      }
    },
    credito: {
      monto: `$ ${requestedVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      moneda: 'Dólares',
      plazo: '24 meses',
      campana: `Campaña ${r.concesionario} Ahorro 2026`,
      tea: '12.50%',
      tcea: '14.80%',
      cuota: `$ ${cuotaVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      inicial: '$ 3,000.00'
    },
    vehiculo: {
      desc: isToyota ? 'Toyota RAV4 Active 2024' : 'Hyundai Tucson Comfort 2024',
      estado: 'Nuevo',
      marca: r.concesionario,
      modelo: isToyota ? 'RAV4' : 'Tucson',
      ano: '2024',
      precio: `$ ${(requestedVal + 4000).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      concesionario: r.concesionario,
      tienda: r.tienda,
      vin: `BAIDAA3GS${hash}5678`
    },
    capacidad: {
      rci: `${rciVal}%`,
      ingresos: `$ ${incomeVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      maxima: `$ ${(incomeVal * 0.45).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      disponible: `$ ${(incomeVal * 0.45 - 200).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      cuota: `$ ${cuotaVal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      aplica: rciVal <= 45 ? 'Sí' : 'No'
    },
    deudasTitular: [
      { entidad: 'BCP - Préstamo', tipo: 'Financiera', saldo: '$ 2,200.00', cargaMes: '$ 150.00', cargaSust: '$ 150.00' }
    ],
    deudasConyuge: [],
    deudasTitularTotal: '$ 150.00',
    deudasConyugeTotal: '$ 0.00',
    deudasCombinadoTotal: '$ 150.00',
    checklist: (() => {
      const chList = [
        { n: 1, doc: 'DNI del titular', oblig: 'Sí', estado: 'Conforme', obs: '—' },
        { n: 2, doc: 'Boletas de pago (últimos 3 meses)', oblig: 'Sí', estado: 'Conforme', obs: '—' },
        { n: 3, doc: 'Constancia de trabajo / Certificado laboral', oblig: 'Sí', estado: 'Conforme', obs: '—' },
        { n: 4, doc: 'Estados de cuenta (últimos 3 meses)', oblig: 'Sí', estado: 'Conforme', obs: '—' }
      ];
      if (r.estado === 'Pendiente') {
        chList.forEach(item => {
          item.estado = 'Pendiente';
        });
      } else if (r.estado === 'Rechazado') {
        chList[3].estado = 'Rechazado';
        chList[3].obs = 'Estados de cuenta mensuales ilegibles o incompletos.';
      } else if (r.estado === 'Observado') {
        chList[3].estado = 'Observado';
        chList[3].obs = 'Falta sustentar saldo de tarjeta de crédito.';
      } else if (r.estado === 'Respuesta') {
        chList[1].estado = 'Subsanado';
        chList[1].obs = 'Se procedió a subir la boleta de pago de la cónyuge de abril en la sección ingresos y checklist. Por favor continuar evaluación.';
      }
      return chList;
    })(),
    execComments: [
      `Cliente califica para la campaña ${r.concesionario}.`,
      `Relación RCI calculada en ${rciVal}%.`,
      isApproved ? "Documentación revisada y conforme." : "Pendiente de revisar sustento de deudas."
    ]
  };
}

let details = null;

// Información capturada desde la solicitud para que Riesgos la visualice en modo solo lectura.
// Se mantiene el look & feel existente y únicamente se reemplaza el contenido de las pestañas solicitadas.
const baseFormSnapshot = {
  cliente: {
    tipoDocumento: 'DNI',
    numeroDocumento: '70569533',
    nombres: 'Juan',
    apellidoPaterno: 'Pérez',
    apellidoMaterno: 'García',
    segmentoRiesgo: 'B',
    mostrarSegmentoRiesgo: true,
    fechaNacimiento: '11/05/1995',
    celular: '',
    correo: '',
    sexo: 'Seleccionar',
    nacionalidad: '',
    residencia: '',
    direccion: '',
    departamento: 'Seleccionar',
    provincia: 'Seleccionar',
    distrito: 'Seleccionar',
    estadoCivil: 'Seleccionar',
    mancomunaIngresos: '',
    separacionBienes: 'Seleccionar'
  },
  conyuge: {
    tipoDocumento: '',
    numeroDocumento: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    nacionalidad: ''
  },
  laboral: {
    categoria: 'Seleccionar',
    ruc: '',
    nombreCentro: '',
    direccion: '',
    giro: 'Seleccionar',
    cargo: 'Seleccionar',
    fechaIngreso: '',
    moneda: 'Soles (S/)',
    ingresos: 'S/ 0.00'
  },
  ingresos: {
    mostrarIngresoEstimado: true,
    ingresoEstimado: 'S/ 4,800.00',
    tipoCategoria: 'Seleccionar',
    perfil: 'Seleccionar',
    situacionLaboral: 'Seleccionar',
    fechaIngreso: '',
    rucEmpleador: '',
    ingresoNetoMensual: 'S/ 0.00',
    ingresoAnualizado: 'No',
    totalTitular: 'S/ 0.00'
  },
  ingresosConyuge: null,
  vehiculo: {
    estado: 'Nuevo',
    concesionario: 'Hyundai',
    sucursal: 'Puruchuco',
    tipoDocVendedor: 'DNI',
    numeroDocVendedor: '',
    vendedor: 'ALOCHA',
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: '2026',
    tarjetaPropiedad: 'Titular'
  },
  credito: {
    producto: 'Crédito Vehicular',
    campana: 'SUV Mayo 2026',
    carretera: 'Full',
    mostrarCarretera: true,
    verificacion: 'Digital',
    mostrarVerificacion: true,
    moneda: 'Soles (S/)',
    tipoCambio: '3.78',
    precioVehiculo: '$ 28,000.00',
    cuotaInicial: '$ 8,000.00',
    tea: '12.80%',
    plazo: '24 meses',
    diaPago: '03',
    totalFinanciamiento: 'S/ 32,130.00'
  },
  gastos: {
    notariales: 'Sí',
    registrales: '',
    delivery: '',
    planGps: 'Premium',
    inclusionGps: '$ 650.00',
    mostrarKitMantenimiento: true,
    kitMantenimiento: 'No',
    cuotasDobles: 'No',
    portes: 'No'
  },
  seguros: {
    vehicular: '',
    costoVehicular: 'S/ 1,200.00',
    desgravamen: 'Sí',
    productoDesgravamen: 'Individual',
    mostrarCamposExtra: true,
    costoDesgravamen: '$ 0.00',
    optativo: 'No',
    costoOptativo: 'NO',
    tipoOptativo: 'Seleccionar'
  }
};

// Valores solicitados para Evaluación Riesgos cuando la carretera es FULL.
const fullFormSnapshot = {
  cliente: {
    tipoDocumento: 'DNI',
    numeroDocumento: '70569533',
    nombres: 'Juan',
    apellidoPaterno: 'Pérez',
    apellidoMaterno: 'García',
    segmentoRiesgo: 'A',
    mostrarSegmentoRiesgo: true,
    fechaNacimiento: '11/05/1995',
    celular: '988569966',
    correo: 'prueba@gmail.com',
    sexo: 'Masculino',
    nacionalidad: 'Peruano',
    residencia: 'Permanente',
    direccion: 'AV. Las moras 123',
    departamento: 'LIMA',
    provincia: 'CAÑETE',
    distrito: 'SAN VICENTE',
    estadoCivil: 'Casado(a)',
    mancomunaIngresos: 'Sí',
    separacionBienes: 'No'
  },
  conyuge: {
    tipoDocumento: 'DNI',
    numeroDocumento: '705269833',
    nombres: 'Maria',
    apellidoPaterno: 'Flores',
    apellidoMaterno: 'Gomez',
    fechaNacimiento: '01/01/2001',
    nacionalidad: 'Peruana'
  },
  laboral: {
    categoria: 'Dependiente',
    ruc: '20705896880',
    nombreCentro: 'Grupo alicorp',
    direccion: 'av. lima 123',
    giro: 'Comercio',
    cargo: 'Empleado',
    fechaIngreso: '01/01/2020',
    moneda: 'Soles (S/)',
    ingresos: '6000.00'
  },
  ingresos: {
    mostrarIngresoEstimado: true,
    ingresoEstimado: 'S/ 5,150.00',
    tipoCategoria: '5ta categoría',
    perfil: 'Formal',
    situacionLaboral: 'Dependiente',
    fechaIngreso: '01/01/2021',
    rucEmpleador: '20105698330',
    ingresoNetoMensual: 'S/ 5,500.00',
    ingresoAnualizado: 'No',
    totalTitular: 'S/ 5,500.00'
  },
  ingresosConyuge: {
    tipoCategoria: '4ta categoría',
    perfil: 'Formal',
    situacionLaboral: 'Dependiente',
    fechaIngreso: '03/01/2023',
    rucEmpleador: '20785698000',
    ingresoNetoMensual: 'S/ 1,500.00',
    ingresoAnualizado: 'No',
    totalConyuge: 'S/ 1,500.00',
    totalCombinado: 'S/ 7,000.00'
  },
  vehiculo: {
    estado: 'Nuevo',
    concesionario: 'Hyundai',
    sucursal: 'Puruchuco',
    tipoDocVendedor: 'DNI',
    numeroDocVendedor: 'Ingrese documento',
    vendedor: 'ALOCHA',
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: '2026',
    tarjetaPropiedad: 'Titular'
  },
  credito: {
    producto: 'Crédito Vehicular',
    campana: 'SUV Mayo 2026',
    carretera: 'Full',
    mostrarCarretera: false,
    verificacion: 'Digital',
    mostrarVerificacion: false,
    moneda: 'Soles (S/)',
    tipoCambio: '3.78',
    precioVehiculo: '$ 15,000.00',
    cuotaInicial: '$ 6,500.00',
    tea: '12.80%',
    plazo: '24 meses',
    diaPago: '03',
    totalFinanciamiento: 'S/ 32,130.00'
  },
  gastos: {
    notariales: 'Sí',
    registrales: 'Sí',
    delivery: 'Sí',
    planGps: 'Premium',
    inclusionGps: '$ 650.00',
    mostrarKitMantenimiento: false,
    kitMantenimiento: '',
    cuotasDobles: 'No',
    portes: 'No'
  },
  seguros: {
    vehicular: 'Con seguro',
    costoVehicular: '0.00%',
    desgravamen: 'Con seguro',
    productoDesgravamen: 'Individual',
    mostrarCamposExtra: false,
    costoDesgravamen: '',
    optativo: '',
    costoOptativo: '',
    tipoOptativo: ''
  }
};

// Valores solicitados para Evaluación Riesgos cuando la carretera es EXPRESS.
const expressFormSnapshot = {
  cliente: {
    tipoDocumento: 'DNI',
    numeroDocumento: '70569533',
    nombres: 'Juan',
    apellidoPaterno: 'Pérez',
    apellidoMaterno: 'García',
    segmentoRiesgo: 'C',
    mostrarSegmentoRiesgo: true,
    fechaNacimiento: '11/05/1995',
    celular: '987458899',
    correo: 'efectiva@efetibank.com.pe',
    sexo: 'Masculino',
    nacionalidad: 'Peruano',
    residencia: 'Permanente',
    direccion: 'av. Las pruebas 123',
    departamento: 'LIMA',
    provincia: 'LIMA',
    distrito: 'MIRAFLORES',
    estadoCivil: 'Soltero(a)',
    mancomunaIngresos: undefined,
    separacionBienes: undefined
  },
  conyuge: {
    tipoDocumento: '',
    numeroDocumento: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    fechaNacimiento: '',
    nacionalidad: ''
  },
  laboral: {
    categoria: 'Dependiente',
    ruc: '20705695330',
    nombreCentro: 'Grupo gloria',
    direccion: 'av. los jazmines 123',
    giro: 'Comercio',
    cargo: 'Subgerente',
    fechaIngreso: '01/01/2020',
    moneda: 'Soles (S/)',
    ingresos: '3500.00'
  },
  ingresos: {
    mostrarIngresoEstimado: true,
    ingresoEstimado: 'S/ 5,150.00',
    tipoCategoria: 'Seleccionar',
    perfil: 'Seleccionar',
    situacionLaboral: 'Seleccionar',
    fechaIngreso: '',
    rucEmpleador: '',
    ingresoNetoMensual: 'S/ 0.00',
    ingresoAnualizado: 'No',
    totalTitular: 'S/ 0.00'
  },
  ingresosConyuge: null,
  vehiculo: {
    estado: 'Nuevo',
    concesionario: 'Hyundai',
    sucursal: 'Puruchuco',
    tipoDocVendedor: 'DNI',
    numeroDocVendedor: '748578966',
    vendedor: 'Alonso Gonzales Romero',
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: '2026',
    tarjetaPropiedad: 'Titular'
  },
  credito: {
    producto: 'Crédito Vehicular',
    campana: 'SUV Mayo 2026',
    carretera: 'Express',
    mostrarCarretera: false,
    verificacion: 'Digital',
    mostrarVerificacion: false,
    moneda: 'Soles (S/.)',
    tipoCambio: '3.78',
    precioVehiculo: '$ 15,000.00',
    cuotaInicial: '$ 6,500.00',
    tea: '12.80%',
    plazo: '60 meses',
    diaPago: '03',
    totalFinanciamiento: 'S/ 32,130.00'
  },
  gastos: {
    notariales: 'Sí',
    registrales: 'Sí',
    delivery: 'Sí',
    planGps: 'Premium',
    inclusionGps: '$ 650.00',
    mostrarKitMantenimiento: false,
    kitMantenimiento: '',
    cuotasDobles: 'Sí',
    mesesCuotasDobles: 'Agosto / Enero',
    portes: 'No'
  },
  seguros: {
    vehicular: 'Con seguro',
    costoVehicular: '12.10%',
    desgravamen: 'Con seguro',
    productoDesgravamen: 'Individual',
    mostrarCamposExtra: false,
    costoDesgravamen: '',
    optativo: '',
    costoOptativo: '',
    tipoOptativo: ''
  }
};


let formSnapshot = cloneFormSnapshot(baseFormSnapshot);

function cloneFormSnapshot(snapshot) {
  return JSON.parse(JSON.stringify(snapshot));
}

function isFullRoad(recordData) {
  return String(recordData?.carretera || '').trim().toLowerCase() === 'full';
}

function isExpressRoad(recordData) {
  return String(recordData?.carretera || '').trim().toLowerCase() === 'express';
}

function getFormSnapshotByRoad(recordData) {
  if (isFullRoad(recordData)) return fullFormSnapshot;
  if (isExpressRoad(recordData)) return expressFormSnapshot;
  return baseFormSnapshot;
}

function getRiskSegment(recordData) {
  if (recordData?.segmentoRiesgo) return recordData.segmentoRiesgo;
  if (recordData?.segmento) return recordData.segmento;

  const carretera = (recordData?.carretera || '').toLowerCase();
  if (carretera.includes('semi')) return 'B';
  if (carretera.includes('full')) return 'A';
  if (carretera.includes('express')) return 'C';
  if (carretera.includes('escritorio')) return 'D';
  return 'B';
}

function getVerificationType(recordData) {
  if (recordData?.verificacion) return recordData.verificacion;
  if (recordData?.tipoVerificacion) return recordData.tipoVerificacion;

  const carretera = (recordData?.carretera || '').toLowerCase();
  return (carretera.includes('express') || carretera.includes('escritorio')) ? 'Digital' : 'Física';
}

function formatSolesAmount(value) {
  const amount = Number(value) || 0;
  return `S/ ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function getEstimatedIncome(recordData) {
  if (recordData?.ingresoEstimado) return formatSolesAmount(recordData.ingresoEstimado);

  const hash = (recordData?.solicitud || '').split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const amount = 3800 + (hash % 8) * 450;
  return formatSolesAmount(amount);
}

function fieldBox(label, value, span = 1) {
  return `
    <div class="info-box" style="grid-column: span ${span};">
      <span class="info-box-label">${label}</span>
      <span class="info-box-val">${value || '—'}</span>
    </div>
  `;
}


function sectionHtml(title, fields) {
  return `
    <h3 style="font-size: 0.9rem; font-weight: 800; color: #0b4ec2; margin-bottom: 1rem; border-bottom: 1.5px solid #eff6ff; padding-bottom: 0.5rem; text-transform: uppercase;">
      ${title}
    </h3>
    <div class="info-box-grid">
      ${fields.map(([label, value, span]) => fieldBox(label, value, span || 1)).join('')}
    </div>
  `;
}

function readonlyValue(value) {
  if (value === undefined || value === null || String(value).trim() === '') return '—';
  return value;
}

function escapeAttribute(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function copyIconSvg() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 1H4c-1.1 0-2 .9-2 2v12h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`;
}

function checkIconSvg() {
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
}

function copyReadonlyValue(button) {
  const value = button?.getAttribute('data-copy-value') || '';
  const showCopiedState = () => {
    button.classList.add('copied');
    button.innerHTML = checkIconSvg();
    button.setAttribute('aria-label', 'Copiado');

    window.setTimeout(() => {
      button.classList.remove('copied');
      button.innerHTML = copyIconSvg();
      button.setAttribute('aria-label', 'Copiar número de documento');
    }, 1200);
  };

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(value).then(showCopiedState).catch(() => copyReadonlyValueFallback(value, showCopiedState));
    return;
  }

  copyReadonlyValueFallback(value, showCopiedState);
}

function copyReadonlyValueFallback(value, onSuccess) {
  const textarea = document.createElement('textarea');
  textarea.value = value;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();

  try {
    document.execCommand('copy');
    onSuccess();
  } finally {
    document.body.removeChild(textarea);
  }
}

function readonlyField(label, value, span = 1, required = false, copyable = false) {
  const fieldValue = readonlyValue(value);
  const controlHtml = copyable ? `
      <div class="readonly-control readonly-copy-control">
        <span class="readonly-copy-value">${fieldValue}</span>
        <button type="button" class="readonly-copy-btn" data-copy-value="${escapeAttribute(fieldValue)}" onclick="copyReadonlyValue(this)" aria-label="Copiar número de documento" title="Copiar">
          ${copyIconSvg()}
        </button>
      </div>` : `<div class="readonly-control">${fieldValue}</div>`;

  return `
    <div class="readonly-field" style="grid-column: span ${span};">
      <label>${label}${required ? ' <span class="readonly-required">*</span>' : ''}</label>
      ${controlHtml}
    </div>
  `;
}

function readonlySectionHtml(title, fields, description = '') {
  return `
    <section class="readonly-form-section">
      <h3 class="readonly-section-title">${title}</h3>
      ${description ? `<p class="readonly-section-desc">${description}</p>` : ''}
      <div class="readonly-grid">
        ${fields.map(([label, value, span, required, copyable]) => readonlyField(label, value, span || 1, !!required, !!copyable)).join('')}
      </div>
    </section>
  `;
}

function readonlyIncomeCardHtml(title, incomeData, totalLabel, totalValue, description = '') {
  return `
      <div class="readonly-income-card">
        <div class="readonly-income-card-title">${title}</div>
        ${description ? `<p class="readonly-section-desc" style="margin-top:-0.35rem; margin-bottom:0.65rem;">${description}</p>` : ''}
        <div class="readonly-income-pill">Ingreso 1</div>
        <div class="readonly-grid readonly-grid-income">
          ${readonlyField('Tipo de categoría', incomeData?.tipoCategoria)}
          ${readonlyField('Perfil', incomeData?.perfil)}
          ${readonlyField('Situación laboral', incomeData?.situacionLaboral)}
          ${readonlyField('Fecha de ingreso laboral', incomeData?.fechaIngreso)}
          ${readonlyField('RUC del empleador', incomeData?.rucEmpleador)}
          ${readonlyField('Ingreso neto mensual', incomeData?.ingresoNetoMensual)}
          ${readonlyField('¿Ingreso anualizado?', incomeData?.ingresoAnualizado)}
        </div>
        <div class="readonly-income-total">
          <span>${totalLabel}</span>
          <strong>${readonlyValue(totalValue)}</strong>
        </div>
      </div>
  `;
}

function ingresosSectionHtml() {
  const hasConyugeIncome = !!formSnapshot.ingresosConyuge;

  return `
    <section class="readonly-form-section">
      <h3 class="readonly-section-title">Ingresos</h3>
      <p class="readonly-section-desc">Registro de ingresos declarados por el titular. Puedes añadir más de un ingreso.</p>
      ${formSnapshot.ingresos.mostrarIngresoEstimado === false ? '' : `
      <div class="readonly-grid readonly-estimated-income-grid">
        ${readonlyField('Ingreso estimado (S/.)', formSnapshot.ingresos.ingresoEstimado)}
      </div>`}
      ${readonlyIncomeCardHtml('Ingresos del titular', formSnapshot.ingresos, 'Total ingresos titular:', formSnapshot.ingresos.totalTitular)}
      ${hasConyugeIncome ? `
        ${readonlyIncomeCardHtml('Ingresos del conyugue', formSnapshot.ingresosConyuge, 'Total ingresos conyugue:', formSnapshot.ingresosConyuge.totalConyuge, 'Registra los ingresos declarados por el conyuge o conviviente. Puedes añadir más de un ingreso.')}
        <div class="readonly-income-total" style="margin-top:0.75rem; border-top:1px solid #e2e8f0;">
          <span>Total ingresos titular + conyugue:</span>
          <strong>${readonlyValue(formSnapshot.ingresosConyuge.totalCombinado)}</strong>
        </div>
      ` : ''}
    </section>
  `;
}

function ingresoEstimadoSectionHtml() {
  return readonlySectionHtml('Ingresos', [
    ['Ingreso estimado (S/.)', formSnapshot.ingresos.ingresoEstimado]
  ]);
}

// Tab switching logic
function switchTab(tabId) {
  // Toggle active class on navigation buttons
  const buttons = document.querySelectorAll('.tab-nav-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  
  const activeBtn = document.getElementById(`tab-btn-${tabId}`);
  if (activeBtn) activeBtn.classList.add('active');

  const contentArea = document.getElementById('tab-content-area');
  if (!contentArea) return;

  let html = '';

  switch (tabId) {
    case 'cliente': {
      const clienteFields = [
        ['Tipo de documento', formSnapshot.cliente.tipoDocumento],
        ['Número documento', formSnapshot.cliente.numeroDocumento, 1, false, true],
        ['Nombres', formSnapshot.cliente.nombres],
        ['Apellido paterno', formSnapshot.cliente.apellidoPaterno],
        ['Apellido materno', formSnapshot.cliente.apellidoMaterno]
      ];
      if (formSnapshot.cliente.mostrarSegmentoRiesgo !== false) {
        clienteFields.push(['Segmento de riesgo', formSnapshot.cliente.segmentoRiesgo]);
      }
      clienteFields.push(
        ['Fecha de nacimiento', formSnapshot.cliente.fechaNacimiento],
        ['Número de celular', formSnapshot.cliente.celular, 1, true],
        ['Correo electrónico', formSnapshot.cliente.correo, 1, true],
        ['Sexo', formSnapshot.cliente.sexo],
        ['Nacionalidad', formSnapshot.cliente.nacionalidad],
        ['Residencia', formSnapshot.cliente.residencia],
        ['Dirección de domicilio', formSnapshot.cliente.direccion, 4, true],
        ['Departamento', formSnapshot.cliente.departamento, 1, true],
        ['Provincia', formSnapshot.cliente.provincia, 1, true],
        ['Distrito', formSnapshot.cliente.distrito, 1, true],
        ['Estado civil', formSnapshot.cliente.estadoCivil, 1, true]
      );
      if (formSnapshot.cliente.mancomunaIngresos !== undefined) {
        clienteFields.push(['Mancomuna ingresos', formSnapshot.cliente.mancomunaIngresos]);
      }
      if (formSnapshot.cliente.separacionBienes !== undefined) {
        clienteFields.push(['Separación de bienes', formSnapshot.cliente.separacionBienes]);
      }

      const datosClienteHtml = readonlySectionHtml('Datos de cliente', clienteFields);

      const datosLaboralesHtml = readonlySectionHtml('Datos laborales', [
        ['Categoría laboral', formSnapshot.laboral.categoria],
        ['RUC de empleador (no obligatorio)', formSnapshot.laboral.ruc],
        ['Nombre centro de laboral', formSnapshot.laboral.nombreCentro],
        ['Dirección', formSnapshot.laboral.direccion],
        ['Giro o actividad', formSnapshot.laboral.giro],
        ['Cargo', formSnapshot.laboral.cargo],
        ['Fecha ingreso laboral', formSnapshot.laboral.fechaIngreso],
        ['Tipo moneda ingreso', formSnapshot.laboral.moneda],
        ['Ingresos netos mensuales', formSnapshot.laboral.ingresos]
      ]);

      let datosConyugeHtml = '';
      if ((formSnapshot.cliente.estadoCivil || '').toLowerCase().includes('casad')) {
        datosConyugeHtml = readonlySectionHtml('Datos de cónyuge', [
          ['Tipo de documento', formSnapshot.conyuge?.tipoDocumento || '—'],
          ['Número documento', formSnapshot.conyuge?.numeroDocumento || '—'],
          ['Nombres', formSnapshot.conyuge?.nombres || '—'],
          ['Apellido paterno', formSnapshot.conyuge?.apellidoPaterno || '—'],
          ['Apellido materno', formSnapshot.conyuge?.apellidoMaterno || '—'],
          ['Fecha de nacimiento', formSnapshot.conyuge?.fechaNacimiento || '—'],
          ['Nacionalidad', formSnapshot.conyuge?.nacionalidad || '—']
        ]);
      }

      html = `
        <div class="readonly-tab-stack">
          ${datosClienteHtml}
          ${datosConyugeHtml}
          ${datosLaboralesHtml}
          ${isExpressRoad(record) ? ingresoEstimadoSectionHtml() : ingresosSectionHtml()}
        </div>
      `;
      contentArea.innerHTML = html;
      break;
    }

    case 'comerciales': {
      const datosVehiculoHtml = readonlySectionHtml('Datos de vehículo', [
        ['Estado vehículo', formSnapshot.vehiculo.estado],
        ['Concesionario', formSnapshot.vehiculo.concesionario],
        ['Sucursal', formSnapshot.vehiculo.sucursal || formSnapshot.vehiculo.tienda],
        ['Tipo Doc. vendedor', formSnapshot.vehiculo.tipoDocVendedor],
        ['N° Doc vendedor', formSnapshot.vehiculo.numeroDocVendedor],
        ['Nombre completo vendedor', formSnapshot.vehiculo.vendedor],
        ['Marca', formSnapshot.vehiculo.marca],
        ['Modelo', formSnapshot.vehiculo.modelo],
        ['Año modelo', formSnapshot.vehiculo.anio],
        ['Tarjeta propiedad a nombre de', formSnapshot.vehiculo.tarjetaPropiedad]
      ]);

      const creditoFields = [
        ['Producto', formSnapshot.credito.producto],
        ['Campaña comercial', formSnapshot.credito.campana]
      ];
      if (formSnapshot.credito.mostrarCarretera !== false) {
        creditoFields.push(['Carretera', formSnapshot.credito.carretera]);
      }
      if (formSnapshot.credito.mostrarVerificacion !== false) {
        creditoFields.push(['Verificación', formSnapshot.credito.verificacion]);
      }
      creditoFields.push(
        ['Moneda Financiamiento', formSnapshot.credito.moneda],
        ['Tipo Cambio', formSnapshot.credito.tipoCambio],
        ['Precio Vehículo', formSnapshot.credito.precioVehiculo],
        ['Cuota Inicial', formSnapshot.credito.cuotaInicial],
        ['TEA', formSnapshot.credito.tea],
        ['Plazo Meses', formSnapshot.credito.plazo],
        ['Día Pago', formSnapshot.credito.diaPago],
        ['Total Financiamiento', formSnapshot.credito.totalFinanciamiento]
      );
      const creditoHtml = readonlySectionHtml('Crédito y simulación', creditoFields);

      const gastosFields = [
        ['Gastos Notariales', formSnapshot.gastos.notariales],
        ['Gastos Registrales (sábana)', formSnapshot.gastos.registrales],
        ['Gastos Delivery Firma', formSnapshot.gastos.delivery],
        ['Plan GPS', formSnapshot.gastos.planGps],
        ['Gastos Inclusión GPS (cálculo)', formSnapshot.gastos.inclusionGps]
      ];
      if (formSnapshot.gastos.mostrarKitMantenimiento !== false) {
        gastosFields.push(['Kit Mantenimiento prepagado', formSnapshot.gastos.kitMantenimiento]);
      }
      gastosFields.push(['Cuotas Dobles', formSnapshot.gastos.cuotasDobles]);
      if (formSnapshot.gastos.mesesCuotasDobles !== undefined) {
        gastosFields.push(['Meses de cuotas dobles', formSnapshot.gastos.mesesCuotasDobles]);
      }
      gastosFields.push(['Incluir Portes', formSnapshot.gastos.portes]);
      const gastosHtml = readonlySectionHtml('Gastos y plan GPS', gastosFields);

      const segurosFields = [
        ['Seguro Vehicular', formSnapshot.seguros.vehicular],
        ['Costo Seguro Vehicular', formSnapshot.seguros.costoVehicular],
        ['Seguro Desgravamen', formSnapshot.seguros.desgravamen],
        ['Tipo de seguro desgravamen', formSnapshot.seguros.productoDesgravamen]
      ];
      if (formSnapshot.seguros.mostrarCamposExtra !== false) {
        segurosFields.push(
          ['Costo Seguro Desgravamen (cálculo)', formSnapshot.seguros.costoDesgravamen],
          ['Seguro Optativo', formSnapshot.seguros.optativo],
          ['COSTO Seguro Optativo', formSnapshot.seguros.costoOptativo],
          ['TIPO SEGURO OPTATIVO', formSnapshot.seguros.tipoOptativo]
        );
      }
      const segurosHtml = readonlySectionHtml('Seguros', segurosFields);

      html = `
        <div class="readonly-tab-stack">
          ${datosVehiculoHtml}
          ${creditoHtml}
          ${gastosHtml}
          ${segurosHtml}
        </div>
      `;
      contentArea.innerHTML = html;
      break;
    }

    case 'deudas':
      html = `
        <h3 style="font-size: 0.9rem; font-weight: 800; color: #0b4ec2; margin-bottom: 1rem; border-bottom: 1.5px solid #eff6ff; padding-bottom: 0.5rem; text-transform: uppercase;">
          Deudas y carga financiera
        </h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1rem;">
          <!-- Deudas titular -->
          <div>
            <h4 style="font-size: 0.65rem; color: #0b4ec2; margin-bottom: 0.35rem; font-weight: 700; text-transform: uppercase;">Deudas del titular</h4>
            <table class="deudas-table">
              <thead>
                <tr>
                  <th>Banco / Entidad</th>
                  <th>Tipo</th>
                  <th>Saldo Vigente</th>
                  <th>Carga / Mes</th>
                  <th>Carga Sust.</th>
                </tr>
              </thead>
              <tbody id="deudas-titular-body">
                <!-- Loaded dynamically -->
              </tbody>
            </table>
            <div style="display: flex; justify-content: space-between; border-top: 1.5px solid var(--border-color); padding-top: 0.45rem; margin-top: 0.45rem; font-size: 0.7rem; font-weight: 700; color: #0b4ec2;">
              <span>Carga titular:</span>
              <span id="deudas-titular-total">${details.deudasTitularTotal}</span>
            </div>
          </div>

          <!-- Deudas cónyuge -->
          <div>
            <h4 style="font-size: 0.65rem; color: #0b4ec2; margin-bottom: 0.35rem; font-weight: 700; text-transform: uppercase;">Deudas del cónyuge</h4>
            <table class="deudas-table">
              <thead>
                <tr>
                  <th>Banco / Entidad</th>
                  <th>Tipo</th>
                  <th>Saldo Vigente</th>
                  <th>Carga / Mes</th>
                  <th>Carga Sust.</th>
                </tr>
              </thead>
              <tbody id="deudas-conyuge-body">
                <!-- Loaded dynamically -->
              </tbody>
            </table>
            <div style="display: flex; justify-content: space-between; border-top: 1.5px solid var(--border-color); padding-top: 0.45rem; margin-top: 0.45rem; font-size: 0.7rem; font-weight: 700; color: #0b4ec2;">
              <span>Carga cónyuge:</span>
              <span id="deudas-conyuge-total">${details.deudasConyugeTotal}</span>
            </div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; background-color: #f8fafc; padding: 0.5rem 1rem; border-radius: 6px; border: 1px solid var(--border-color); font-size: 0.75rem; font-weight: 800; color: #0b4ec2; margin-bottom: 1.25rem;">
          <span>Carga financiera total (titular + cónyuge):</span>
          <span id="deudas-combinado-total">${details.deudasCombinadoTotal}</span>
        </div>

        <!-- Cálculo de capacidad -->
        <h4 style="font-size: 0.72rem; font-weight: 800; color: #0b4ec2; text-transform: uppercase; border-bottom: 1.5px solid #eff6ff; padding-bottom: 0.35rem; margin-bottom: 0.65rem;">
          Cálculo de capacidad
        </h4>
        <div class="info-box-grid">
          <div class="info-box">
            <span class="info-box-label">Capacidad máxima ODM</span>
            <span class="info-box-val">${details.capacidad.maxima}</span>
          </div>
          <div class="info-box">
            <span class="info-box-label">Carga financiera actual</span>
            <span class="info-box-val" style="color: #ea580c;">${details.deudasCombinadoTotal}</span>
          </div>
          <div class="info-box">
            <span class="info-box-label">Capacidad disponible</span>
            <span class="info-box-val" style="color: #16a34a;">${details.capacidad.disponible}</span>
          </div>
          <div class="info-box">
            <span class="info-box-label">Cuota vehicular</span>
            <span class="info-box-val" style="color: #0b4ec2;">${details.capacidad.cuota}</span>
          </div>
          <div class="info-box" style="grid-column: span 2;">
            <span class="info-box-label">Resultado</span>
            <div>
              <span class="status-pill" style="background-color: ${parseCurrency(details.capacidad.disponible) >= parseCurrency(details.capacidad.cuota) ? '#dcfce7' : '#ffe4e6'}; color: ${parseCurrency(details.capacidad.disponible) >= parseCurrency(details.capacidad.cuota) ? '#15803d' : '#dc2626'}; padding: 0.25rem 0.75rem; border-radius: 6px; font-weight: 800; font-size: 0.75rem; display: inline-flex; align-items: center;">
                ${parseCurrency(details.capacidad.disponible) >= parseCurrency(details.capacidad.cuota) ? 'CALIFICA' : 'NO CALIFICA'}
              </span>
            </div>
          </div>
        </div>
      `;
      contentArea.innerHTML = html;

      // Populate titular debts
      const tBody = document.getElementById('deudas-titular-body');
      if (tBody) {
        tBody.innerHTML = '';
        if (details.deudasTitular.length === 0) {
          tBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#94a3b8;">Sin deudas registradas</td></tr>`;
        } else {
          details.deudasTitular.forEach(d => {
            tBody.innerHTML += `
              <tr>
                <td style="font-weight:600; color:var(--text-dark);">${d.entidad}</td>
                <td>${d.tipo}</td>
                <td>${d.saldo}</td>
                <td>${d.cargaMes}</td>
                <td>${d.cargaSust}</td>
              </tr>
            `;
          });
        }
      }

      // Populate conyuge debts
      const cBody = document.getElementById('deudas-conyuge-body');
      if (cBody) {
        cBody.innerHTML = '';
        if (details.deudasConyuge.length === 0) {
          cBody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:#94a3b8;">Sin deudas registradas</td></tr>`;
        } else {
          details.deudasConyuge.forEach(d => {
            cBody.innerHTML += `
              <tr>
                <td style="font-weight:600; color:var(--text-dark);">${d.entidad}</td>
                <td>${d.tipo}</td>
                <td>${d.saldo}</td>
                <td>${d.cargaMes}</td>
                <td>${d.cargaSust}</td>
              </tr>
            `;
          });
        }
      }
      break;
  }
}

// Function defined outside the tab switch since the checklist is global
function renderChecklist() {
  const chBody = document.getElementById('checklist-body');
  if (chBody) {
    chBody.innerHTML = '';
    details.checklist.forEach((c, index) => {
      chBody.innerHTML += `
        <tr>
          <td style="color:var(--text-muted); font-weight:700;">${c.n}</td>
          <td style="font-weight:600; color:var(--text-dark);">${c.doc}</td>
          <td>
            <div style="display:flex; align-items:center; gap:0.25rem; font-size:0.65rem; color:#0054D1; font-weight:500;">
              <svg viewBox="0 0 24 24" style="width:14px; height:14px; fill:currentColor;"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
              <span>evaluacion.pdf</span>
            </div>
          </td>
          <td>
            <div style="display:flex; gap:0.25rem; align-items:center;">
              <button class="btn-revisar" onclick="openPdfModal(${index})" style="background-color:#eff6ff; color:#0b4ec2; border:1px solid #dbeafe; font-size:0.6rem; padding:0.2rem 0.4rem; display:inline-flex; align-items:center; gap:0.15rem; cursor:pointer;">
                <svg viewBox="0 0 24 24" style="width:10px; height:10px; fill:currentColor;"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                Ver
              </button>
              <button class="btn-revisar" onclick="downloadPDF(${index})" style="background-color:#f1f5f9; color:var(--text-dark); border:1px solid var(--border-color); font-size:0.6rem; padding:0.2rem 0.4rem; display:inline-flex; align-items:center; gap:0.15rem; cursor:pointer;">
                <svg viewBox="0 0 24 24" style="width:10px; height:10px; fill:currentColor;"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
                Descargar
              </button>
            </div>
          </td>
        </tr>
      `;
    });
  }
  updateDecisionButtonsVisibility();
}

function changeDocEstado(index, value) {
  details.checklist[index].estado = value;
  localStorage.setItem(`efectiva_checklist_${record.solicitud}`, JSON.stringify(details.checklist));
  if (value === 'Conforme' || value === 'No Aplica') {
    details.checklist[index].obs = '—';
    renderChecklist();
  }
}

function changeDocObs(index, value) {
  details.checklist[index].obs = value;
  localStorage.setItem(`efectiva_checklist_${record.solicitud}`, JSON.stringify(details.checklist));
}

function changeDocComentario(index, value) {
  details.checklist[index].comentario = value;
  localStorage.setItem(`efectiva_checklist_${record.solicitud}`, JSON.stringify(details.checklist));
}

// Modal View PDF actions
function openPdfModal(index) {
  const doc = details.checklist[index];
  document.getElementById('pdf-modal-title').textContent = `Vista de Documento: ${doc.doc}`;
  
  const iframe = document.getElementById('pdf-iframe');
  iframe.src = `documento_evaluacion.pdf#toolbar=0&navpanes=0`;
  
  document.getElementById('pdf-modal').classList.add('open');
}

function closePdfModal() {
  document.getElementById('pdf-modal').classList.remove('open');
  document.getElementById('pdf-iframe').src = '';
}

// End of checklist helper functions

function downloadPDF(index) {
  const docName = details.checklist[index].doc;
  const link = document.createElement('a');
  link.href = 'documento_evaluacion.pdf';
  link.download = `${docName.replace(/\s+/g, '_')}.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

let timelineSteps = [];

// Render dynamic tracking timeline
function renderTimeline() {
  const timeline = document.getElementById('tracking-timeline');
  if (!timeline) return;

  const isApproved = record.estado === 'Aprobado';
  const isRejected = record.estado === 'Rechazado';
  const isObserved = record.estado === 'Observado';

  const checkSVG = `<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>`;
  const crossSVG = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
  const infoSVG = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;

  // Build steps array dynamically
  const steps = [
    { title: 'Simulación', date: '20/05/2026 09:20', type: 'conforme', icon: checkSVG },
    { title: 'Solicitud recibida', date: '20/05/2026 09:45', type: 'conforme', icon: checkSVG }
  ];

  let revisionStep = {
    title: 'Revisión Riesgos',
    date: '22/05/2026 15:30',
    type: 'conforme',
    icon: checkSVG,
    key: 'revision'
  };

  if (isRejected) {
    revisionStep.type = 'rechazado';
    revisionStep.icon = crossSVG;
    revisionStep.subitems = [
      {
        title: 'Rechazo Analista',
        date: '22/05/2026 15:35',
        user: 'Analista de Riesgos (María Fe Cárdenas)',
        action: 'Rechazado',
        color: '#dc2626',
        comments: record.comentarios || 'Cliente no cuenta con capacidad de pago sustentada para cuota vehicular. RCI excede límite establecido para Semi full (45%).'
      }
    ];
    steps.push(revisionStep);
  } else if (record.estado === 'Respuesta') {
    revisionStep.type = 'pendiente';
    revisionStep.icon = infoSVG;
    revisionStep.subitems = [
      {
        title: 'Observación Analista',
        date: '21/05/2026 10:15',
        user: 'Analista de Riesgos (María Fe Cárdenas)',
        action: 'Observado',
        color: '#ea580c',
        comments: 'Falta adjuntar boletas de pago del cónyuge correspondientes al mes de abril para sustentar ingresos declarados.'
      },
      {
        title: 'Respuesta Ejecutivo',
        date: '21/05/2026 14:05',
        user: 'Ejecutivo de Ventas (María López)',
        action: 'Respuesta Recibida',
        color: '#7c3aed',
        comments: 'Se procedió a subir la boleta de pago de la cónyuge de abril en la sección ingresos y checklist. Por favor continuar evaluación.'
      }
    ];
    steps.push(revisionStep);
  } else if (isObserved) {
    revisionStep.type = 'observado';
    revisionStep.icon = infoSVG;
    revisionStep.subitems = [
      {
        title: 'Observación Analista',
        date: '22/05/2026 11:30',
        user: 'Analista de Riesgos (María Fe Cárdenas)',
        action: 'Observado',
        color: '#ea580c',
        comments: record.comentarios || 'Documentación observada. Falta sustentar saldo de tarjeta de crédito BCP del titular. Adjuntar último estado de cuenta.'
      }
    ];
    steps.push(revisionStep);
  } else if (record.estado === 'Deriv. Jefe') {
    revisionStep.type = 'pendiente';
    revisionStep.icon = infoSVG;
    revisionStep.subitems = [
      {
        title: 'Derivación a Jefe',
        date: '22/05/2026 12:45',
        user: 'Analista de Riesgos (María Fe Cárdenas)',
        action: 'Derivado a Jefe',
        color: '#6d28d9',
        comments: record.comentarios || 'Derivado a aprobación por Jefatura. RCI excede ligeramente el 45% (está en 48%) debido a deudas personales menores. Score crediticio del cliente es excelente y la cuota inicial supera el 30%.'
      }
    ];
    steps.push(revisionStep);
  } else if (isApproved) {
    revisionStep.type = 'conforme';
    revisionStep.icon = checkSVG;
    revisionStep.subitems = [
      {
        title: 'Aprobación Analista',
        date: '22/05/2026 15:35',
        user: 'Analista de Riesgos (María Fe Cárdenas)',
        action: 'Aprobado',
        color: '#16a34a',
        comments: record.comentarios || 'Aprobado. Cliente cuenta con ingresos debidamente verificados y sustentados. Score de crédito óptimo y RCI dentro del límite del 45%.'
      }
    ];
    steps.push(revisionStep);
    steps.push({ title: 'Post Aprobación', date: '22/05/2026 16:00', type: 'conforme', icon: checkSVG });
    steps.push({ title: 'Firma de Contrato', date: '22/05/2026 16:15', type: 'conforme', icon: checkSVG });
  } else {
    // Pendiente
    revisionStep.title = 'Revisión Riesgos (Etapa Actual)';
    revisionStep.type = 'pendiente';
    revisionStep.icon = infoSVG;
    steps.push(revisionStep);
  }

  timelineSteps = steps;

  timeline.innerHTML = '';
  steps.forEach(step => {
    let markerColor = '#16a34a'; // green
    let markerBg = '#dcfce7';
    if (step.type === 'rechazado') {
      markerColor = '#dc2626'; // red
      markerBg = '#fef2f2';
    } else if (step.type === 'observado') {
      markerColor = '#ea580c'; // orange
      markerBg = '#fff7ed';
    } else if (step.type === 'pendiente') {
      markerColor = '#64748b'; // grey
      markerBg = '#f1f5f9';
    }

    timeline.innerHTML += `
      <div class="timeline-item">
        <div class="timeline-marker" style="color: ${markerColor}; background-color: ${markerBg};">
          ${step.icon}
        </div>
        <div class="timeline-content" style="width: 100%;">
          <span class="timeline-title" style="font-weight: 700; font-size: 0.72rem; color: #0f172a;">${step.title}</span>
          <span class="timeline-date" style="font-size: 0.6rem; color: var(--text-muted);">${step.date}</span>
          
          <!-- Subitems dropdown -->
          ${step.subitems ? `
            <div style="display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.5rem; border-left: 2px dashed #cbd5e1; padding-left: 0.5rem;">
              ${step.subitems.map((sub, sIdx) => `
                <div class="timeline-subitem" onclick="openTimelineDetail('${step.key}', ${sIdx})" 
                     onmouseover="this.style.backgroundColor='#f1f5f9'" onmouseout="this.style.backgroundColor='transparent'"
                     style="cursor: pointer; display: flex; flex-direction: column; gap: 0.1rem; padding: 0.25rem; border-radius: 4px; transition: background-color 0.15s; width: 100%;">
                  <span style="font-size: 0.68rem; font-weight: 700; color: #0b4ec2; display: flex; align-items: center; gap: 0.2rem;">
                    <svg viewBox="0 0 24 24" style="width: 10px; height: 10px; fill: currentColor;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    ${sub.title}
                  </span>
                  <span style="font-size: 0.58rem; color: var(--text-muted);">${sub.date}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  });
}

function openTimelineDetail(stepKey, subIndex) {
  const step = timelineSteps.find(s => s.key === stepKey);
  if (!step || !step.subitems || !step.subitems[subIndex]) return;

  const sub = step.subitems[subIndex];

  document.getElementById('timeline-modal-title').textContent = `Historial: ${sub.title}`;
  document.getElementById('timeline-modal-user').textContent = sub.user;
  document.getElementById('timeline-modal-date').textContent = sub.date;
  
  const actionSpan = document.getElementById('timeline-modal-action');
  actionSpan.textContent = sub.action;
  actionSpan.style.color = sub.color;
  
  document.getElementById('timeline-modal-comments').textContent = sub.comments;

  // Open modal
  document.getElementById('timeline-modal').classList.add('open');
}

function initDetailView(id) {
  localRecords = JSON.parse(localStorage.getItem('efectiva_records')) || [...defaultRecords];
  solicitudId = id;
  record = localRecords.find(r => r.solicitud === id) || localRecords[0];

  if (!record) return;

  details = getRecordExtraDetails(record);

  formSnapshot = cloneFormSnapshot(getFormSnapshotByRoad(record));
  formSnapshot.credito.carretera = record.carretera || formSnapshot.credito.carretera || '—';
  formSnapshot.credito.verificacion = getVerificationType(record);
  formSnapshot.cliente.segmentoRiesgo = getRiskSegment(record);
  if (formSnapshot.ingresos.mostrarIngresoEstimado !== false) {
    formSnapshot.ingresos.ingresoEstimado = record.ingresoEstimado
      ? getEstimatedIncome(record)
      : (formSnapshot.ingresos.ingresoEstimado || getEstimatedIncome(record));
  }

  // Load checklist from localStorage if present
  const localChecklist = localStorage.getItem(`efectiva_checklist_${record.solicitud}`);
  let validChecklist = false;
  if (localChecklist && localChecklist !== 'undefined') {
    try {
      const parsedChecklist = JSON.parse(localChecklist);
      if (Array.isArray(parsedChecklist)) {
        details.checklist = parsedChecklist;
        validChecklist = true;
      }
    } catch (e) {
      console.error("Error parsing checklist:", e);
    }
  }

  if (validChecklist) {
    // Guarantee that if the request is in Respuesta state, it loads the checklist with the Subsanado item
    if (record.estado === 'Respuesta' && (!details.checklist || !details.checklist.some(c => c.estado === 'Subsanado'))) {
      details.checklist = getRecordExtraDetails(record).checklist;
      localStorage.setItem(`efectiva_checklist_${record.solicitud}`, JSON.stringify(details.checklist));
    }
    // Guarantee that if the request is in Pendiente state, all checklist items are Pendiente
    if (record.estado === 'Pendiente' && (!details.checklist || !details.checklist.every(c => c.estado === 'Pendiente'))) {
      details.checklist.forEach(c => {
        if (c) c.estado = 'Pendiente';
      });
      localStorage.setItem(`efectiva_checklist_${record.solicitud}`, JSON.stringify(details.checklist));
    }
  } else {
    details.checklist = getRecordExtraDetails(record).checklist;
    localStorage.setItem(`efectiva_checklist_${record.solicitud}`, JSON.stringify(details.checklist));
  }

  // Header metadata
  document.getElementById('header-solicitud-id').textContent = record.solicitud;
  document.getElementById('header-carretera').textContent = record.carretera;
  document.getElementById('checklist-carretera').textContent = `Carretera: ${record.carretera}`;
  
  const statusBadge = document.getElementById('header-status-badge');
  statusBadge.className = `status-pill status-${record.estadoType}`;
  
  let headerIconKey = 'No aplica';
  if (record.estado === 'Aprobado') headerIconKey = 'Conforme';
  else if (record.estado === 'Observado') headerIconKey = 'Observado';
  else if (record.estado === 'Rechazado') headerIconKey = 'Rechazado';
  else if (record.estado === 'Respuesta') headerIconKey = 'Subsanado';
  
  statusBadge.innerHTML = `${checklistStateSVGs[headerIconKey] || ''} ${record.estado.toUpperCase()}`;

  // Guarantee that Respuesta requests have comment history preloaded in localStorage
  if (record.estado === 'Respuesta' && (!record.comentarios || record.comentarios.trim() === '' || !record.comentarios.includes('Respuesta Ejecutivo'))) {
    record.comentarios = '[21/05/2026 10:15] Observación Analista (María Fe Cárdenas):\nFalta adjuntar boletas de pago del cónyuge correspondientes al mes de abril para sustentar ingresos declarados.\n\n[21/05/2026 14:05] Respuesta Ejecutivo (María López):\nSe procedió a subir la boleta de pago de la cónyuge de abril en la sección ingresos y checklist. Por favor continuar evaluación.';
    
    const updatedRecords = localRecords.map(r => {
      if (r.solicitud === record.solicitud) {
        return { ...r, comentarios: record.comentarios };
      }
      return r;
    });
    localRecords = updatedRecords;
    localStorage.setItem('efectiva_records', JSON.stringify(localRecords));
  }

  // Default comments for decided states if they are empty
  if (!record.comentarios) {
    if (record.estado === 'Rechazado') {
      record.comentarios = 'Cliente no cuenta con capacidad de pago sustentada para cuota vehicular. RCI excede límite establecido para Semi full (45%).';
    } else if (record.estado === 'Observado') {
      record.comentarios = 'Documentación observada. Falta sustentar saldo de tarjeta de crédito BCP del titular. Adjuntar último estado de cuenta.';
    } else if (record.estado === 'Deriv. Jefe') {
      record.comentarios = 'Derivado a aprobación por Jefatura. RCI excede ligeramente el 45% (está en 48%) debido a deudas personales menores. Score crediticio del cliente es excelente y la cuota inicial supera el 30%.';
    } else if (record.estado === 'Aprobado') {
      record.comentarios = 'Aprobado. Cliente cuenta con ingresos debidamente verificados y sustentados. Score de crédito óptimo and RCI dentro del límite del 45%.';
    }
  }

  // Decision Panel Visibility & Readonly based on Status (Actions and textarea only active for Pendiente)
  const isEditable = (record.estado === 'Pendiente');
  const commentsField = document.getElementById('eval-comentarios');
  if (commentsField) {
    if (isEditable) {
      commentsField.value = ''; // Input area starts empty for new comments
      commentsField.removeAttribute('readonly');
      commentsField.removeAttribute('disabled');
      commentsField.style.backgroundColor = '#ffffff';
      commentsField.style.cursor = 'text';
      document.getElementById('new-comment-textarea-container').style.display = 'block';
    } else {
      // Show comments field as disabled/readonly and empty since history cards display details
      commentsField.value = '';
      commentsField.setAttribute('readonly', 'true');
      commentsField.setAttribute('disabled', 'true');
      commentsField.style.backgroundColor = '#f1f5f9';
      commentsField.style.cursor = 'not-allowed';
      document.getElementById('new-comment-textarea-container').style.display = 'block';
    }
  }

  const decisionActions = document.getElementById('decision-actions-section');
  if (decisionActions) {
    decisionActions.style.display = 'block'; // Always visible
  }

  // Load active tab (default to 'cliente')
  switchTab('cliente');

  // Populate checklist table
  renderChecklist();

  // Load timeline tracking
  renderTimeline();

  // Render comments history list (casillas)
  renderCommentsHistory();
}

// Bind event listeners once on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-aprobar')?.addEventListener('click', () => {
    openDocModal('modal-aprobar');
  });
  document.getElementById('btn-observar')?.addEventListener('click', () => openDocModal('modal-observar'));
  document.getElementById('btn-rechazar')?.addEventListener('click', () => openDocModal('modal-rechazar'));
});

// Modal helpers for decisions
function openDocModal(modalId) {
  // Clear modal inputs first so they are fresh and error borders are removed
  if (modalId === 'modal-observar') {
    const select = document.getElementById('obs-motivo');
    const comment = document.getElementById('obs-comentario');
    if (select) { select.value = ''; select.style.border = ''; }
    if (comment) { comment.value = ''; comment.style.border = ''; }
  } else if (modalId === 'modal-rechazar') {
    const select = document.getElementById('rechazo-motivo');
    const comment = document.getElementById('rechazo-comentario');
    if (select) { select.value = ''; select.style.border = ''; }
    if (comment) { comment.value = ''; comment.style.border = ''; }
  }
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('open');
}

function closeDocModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
}

function submitAprobar() {
  closeDocModal('modal-aprobar');
  updateStatus('Aprobado', 'aprobado', 'Aprobado por María Fe Cárdenas.');
}

function submitObservar() {
  const motivoSelect = document.getElementById('obs-motivo');
  const comentarioText = document.getElementById('obs-comentario');
  
  const motivo = motivoSelect ? motivoSelect.value : '';
  const comentario = comentarioText ? comentarioText.value.trim() : '';

  let hasError = false;
  if (!motivo) {
    if (motivoSelect) motivoSelect.style.border = '2px solid #ef4444';
    hasError = true;
  } else {
    if (motivoSelect) motivoSelect.style.border = '';
  }

  if (!comentario) {
    if (comentarioText) comentarioText.style.border = '2px solid #ef4444';
    hasError = true;
  } else {
    if (comentarioText) comentarioText.style.border = '';
  }

  if (hasError) {
    showToast('El motivo y el comentario son obligatorios.', 'error');
    return;
  }

  const text = `Motivo: ${motivo}\nDetalle: ${comentario}`;
  updateStatus('Observado', 'observado', text);
  closeDocModal('modal-observar');
}

function submitRechazar() {
  const motivoSelect = document.getElementById('rechazo-motivo');
  const comentarioText = document.getElementById('rechazo-comentario');

  const motivo = motivoSelect ? motivoSelect.value : '';
  const comentario = comentarioText ? comentarioText.value.trim() : '';

  let hasError = false;
  if (!motivo) {
    if (motivoSelect) motivoSelect.style.border = '2px solid #ef4444';
    hasError = true;
  } else {
    if (motivoSelect) motivoSelect.style.border = '';
  }

  if (!comentario) {
    if (comentarioText) comentarioText.style.border = '2px solid #ef4444';
    hasError = true;
  } else {
    if (comentarioText) comentarioText.style.border = '';
  }

  if (hasError) {
    showToast('El motivo y el comentario son obligatorios.', 'error');
    return;
  }

  const text = `Motivo: ${motivo}\nDetalle: ${comentario}`;
  updateStatus('Rechazado', 'rechazado', text);
  closeDocModal('modal-rechazar');
}



function closeTimelineModal() {
  document.getElementById('timeline-modal').classList.remove('open');
}

// Parse comments from raw history string into an array of objects
function parseComments(commentsStr, record) {
  if (!commentsStr || commentsStr.trim() === '') {
    return [];
  }
  
  const entries = [];
  // Matches structured entries like: [21/05/2026 10:15] Observación Analista (María Fe Cárdenas):\nComment Text
  const regex = /\[(.*?)\]\s*(.*?)\s*\((.*?)\):\s*\n([\s\S]*?)(?=\n\s*\[|$)/g;
  let match;
  
  while ((match = regex.exec(commentsStr)) !== null) {
    entries.push({
      fecha: match[1] ? match[1].trim() : '',
      accion: match[2] ? match[2].trim() : '',
      usuario: match[3] ? match[3].trim() : '',
      detalle: match[4] ? match[4].trim() : ''
    });
  }
  
  if (entries.length > 0) {
    return entries;
  }
  
  // Fallback: If it's unstructured plain text, treat it as a single comment card
  let defaultAccion = 'Revisión Riesgos';
  if (record.estado === 'Aprobado') defaultAccion = 'Aprobación Analista';
  else if (record.estado === 'Rechazado') defaultAccion = 'Rechazo Analista';
  else if (record.estado === 'Observado') defaultAccion = 'Observación Analista';
  else if (record.estado === 'Deriv. Jefe') defaultAccion = 'Derivación a Jefe';

  const defaultFecha = record.fecha ? formatDateSlash(record.fecha) : '22/05/2026 15:35';
  
  return [{
    fecha: defaultFecha,
    accion: defaultAccion,
    usuario: 'Analista de Riesgos (María Fe Cárdenas)',
    detalle: commentsStr.trim()
  }];
}

// Render the historical comments list dynamically in cards (casillas)
function renderCommentsHistory() {
  const container = document.getElementById('comments-history-list');
  if (!container) return;

  container.innerHTML = '';
  
  const commentList = parseComments(record.comentarios || '', record);
  
  if (commentList.length === 0) {
    container.innerHTML = `
      <div style="font-size: 0.68rem; color: var(--text-muted); font-style: italic; background-color: #f8fafc; border: 1px dashed #cbd5e1; padding: 0.5rem; border-radius: 6px; text-align: center;">
        Sin comentarios registrados
      </div>
    `;
    return;
  }

  commentList.forEach((c, idx) => {
    let badgeBg = '#e2e8f0';
    let badgeColor = '#475569';
    let cardBg = '#f8fafc';
    let cardBorder = '#e2e8f0';
    
    const actionUpper = c.accion.toUpperCase();
    if (actionUpper.includes('APROBA') || actionUpper.includes('CONFORME')) {
      badgeBg = '#dcfce7';
      badgeColor = '#15803d';
      cardBg = '#f0fdf4';
      cardBorder = '#bbf7d0';
    } else if (actionUpper.includes('OBSERVA')) {
      badgeBg = '#ffedd5';
      badgeColor = '#ea580c';
      cardBg = '#fff7ed';
      cardBorder = '#fed7aa';
    } else if (actionUpper.includes('RECHAZA') || actionUpper.includes('NO CONFORME')) {
      badgeBg = '#ffe4e6';
      badgeColor = '#e11d48';
      cardBg = '#fef2f2';
      cardBorder = '#fecdd3';
    } else if (actionUpper.includes('RESPUESTA') || actionUpper.includes('SUBSANA')) {
      badgeBg = '#f3e8ff';
      badgeColor = '#7c3aed';
      cardBg = '#faf5ff';
      cardBorder = '#e9d5ff';
    } else if (actionUpper.includes('DERIVA') || actionUpper.includes('JEFE')) {
      badgeBg = '#fef3c7';
      badgeColor = '#b45309';
      cardBg = '#fffbeb';
      cardBorder = '#fde68a';
    }

    const isLast = (idx === commentList.length - 1);
    const showReplyButton = (record.estado === 'Respuesta' && isLast);

    container.innerHTML += `
      <div class="comment-history-box" style="background-color: ${cardBg}; border: 1px solid ${cardBorder}; border-radius: 6px; padding: 0.5rem 0.75rem; display: flex; flex-direction: column; gap: 0.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.25rem;">
          <div style="display: flex; align-items: center; gap: 0.35rem; font-size: 0.7rem;">
            <span style="font-weight: 700; color: var(--text-dark);">${c.usuario}</span>
            <span style="font-size: 0.62rem; color: var(--text-muted);">${c.fecha}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span style="font-size: 0.58rem; font-weight: 700; background-color: ${badgeBg}; color: ${badgeColor}; padding: 1px 6px; border-radius: 4px; text-transform: uppercase;">
              ${c.accion}
            </span>
            ${showReplyButton ? `
              <button id="btn-comentario-responder" class="btn-revisar" onclick="toggleNewCommentTextarea()" style="background-color: #7c3aed; color: #ffffff; border: none; font-size: 0.6rem; padding: 0.15rem 0.4rem; display: flex; align-items: center; gap: 0.15rem; cursor: pointer; border-radius: 4px; font-weight: 700; box-shadow: 0 1px 3px rgba(0,0,0,0.15);">
                <svg viewBox="0 0 24 24" style="width: 8px; height: 8px; fill: currentColor;"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>
                Responder
              </button>
            ` : ''}
          </div>
        </div>
        <div style="font-size: 0.7rem; color: var(--text-main); line-height: 1.4; white-space: pre-wrap; font-weight: 500;">${c.detalle}</div>
      </div>
    `;
  });
}

// Toggle comments input textarea (used for Respuesta state)
function toggleNewCommentTextarea() {
  const container = document.getElementById('new-comment-textarea-container');
  if (!container) return;

  if (container.style.display === 'none') {
    container.style.display = 'block';
    const commentsField = document.getElementById('eval-comentarios');
    if (commentsField) {
      commentsField.focus();
    }
  } else {
    container.style.display = 'none';
  }
}

function updateDecisionButtonsVisibility() {
  const isEditable = (record.estado === 'Pendiente');

  const btnAprobar = document.getElementById('btn-aprobar');
  const btnObservar = document.getElementById('btn-observar');
  const btnRechazar = document.getElementById('btn-rechazar');

  if (btnAprobar) {
    btnAprobar.style.display = 'flex';
    btnAprobar.disabled = !isEditable;
  }
  if (btnObservar) {
    btnObservar.style.display = 'flex';
    btnObservar.disabled = !isEditable;
  }
  if (btnRechazar) {
    btnRechazar.style.display = 'flex';
    btnRechazar.disabled = !isEditable;
  }
}

// Update status
function updateStatus(newStatus, newStatusType, modalComment) {
  const commentsField = document.getElementById('eval-comentarios');
  const commentText = (modalComment !== undefined) ? modalComment : (commentsField ? commentsField.value.trim() : '');
  
  // Format current timestamp
  const now = new Date();
  const day = String(now.getDate()).padStart(2, '0');
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const formattedNow = `${day}/${month}/${year} ${hours}:${minutes}`;

  // Map action name
  let newAccion = 'Decisión Riesgos';
  if (newStatus === 'Aprobado') newAccion = 'Aprobación Analista';
  else if (newStatus === 'Observado') newAccion = 'Observación Analista';
  else if (newStatus === 'Rechazado') newAccion = 'Rechazo Analista';
  else if (newStatus === 'Mayor Inicial Requerida') newAccion = 'Mayor Inicial Requerida';
  else if (newStatus === 'Deriv. Jefe') newAccion = 'Derivación a Jefe';

  // Construct entry text
  const defaultMsg = newStatus === 'Aprobado' ? 'Solicitud aprobada conforme.' : 
                     newStatus === 'Observado' ? 'Solicitud observada.' :
                     newStatus === 'Rechazado' ? 'Solicitud rechazada.' : 
                     newStatus === 'Mayor Inicial Requerida' ? 'Solicitud con mayor inicial requerida.' :
                     'Solicitud derivada a jefatura.';
  const finalComment = commentText || defaultMsg;
  const newEntryText = `[${formattedNow}] ${newAccion} (Analista de Riesgos - María Fe Cárdenas):\n${finalComment}`;
  
  // Append new comment entry to comments history string
  let updatedComments = record.comentarios ? record.comentarios.trim() : '';
  if (updatedComments.length > 0) {
    updatedComments += `\n\n${newEntryText}`;
  } else {
    updatedComments = newEntryText;
  }

  const updatedRecords = localRecords.map(r => {
    if (r.solicitud === record.solicitud) {
      return {
        ...r,
        estado: newStatus,
        estadoType: newStatusType,
        comentarios: updatedComments
      };
    }
    return r;
  });

  localStorage.setItem('efectiva_records', JSON.stringify(updatedRecords));

  showToast(`La solicitud ${record.solicitud} ha sido actualizada a: ${newStatus}`, 'success');
  volverABandeja();
}

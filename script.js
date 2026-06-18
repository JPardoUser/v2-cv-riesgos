// Mock data matching the exact records from the image
const defaultRecords = [
  {
    solicitud: 'EFE001',
    nombreCliente: 'García Torres Juan',
    nDocumento: '87654321',
    tipoDocumento: 'DNI',
    concesionario: 'TOYOTA',
    tienda: 'LA MOLINA',
    usuarioEjecutivo: 'María López',
    canal: 'Vendedor',
    carretera: 'Full',
    fecha: '2026-06-15T08:30:00',
    fechaIngresoRiesgos: '2026-06-15T08:30:00',
    estado: 'Pendiente',
    estadoType: 'pendiente',
    comentarios: '',
    analistaAsignado: 'María Fe Cárdenas',
    usuarioAnalista: 'mcardenas',
    etapa: 'Riesgos'
  },
  {
    solicitud: 'EFE005',
    nombreCliente: 'Perez Salazar Juan Carlos',
    nDocumento: '12345678',
    tipoDocumento: 'CE',
    concesionario: 'TOYOTA',
    tienda: 'LA MOLINA',
    usuarioEjecutivo: 'María López',
    canal: 'Vendedor',
    carretera: 'Semi full',
    fecha: '2026-05-21T14:05:00',
    fechaIngresoRiesgos: '2026-05-21T14:05:00',
    estado: 'Pendiente',
    estadoType: 'pendiente',
    comentarios: '',
    analistaAsignado: 'María Fe Cárdenas',
    usuarioAnalista: 'mcardenas',
    etapa: 'Riesgos'
  },
  {
    solicitud: 'EFE006',
    nombreCliente: 'Perez Salazar Felipe Carlos',
    nDocumento: '12345678',
    tipoDocumento: 'Pasaporte',
    concesionario: 'HYUNDAI',
    tienda: 'PURUCHUCO',
    usuarioEjecutivo: 'Juan Pérez',
    canal: 'Ejecutivo',
    carretera: 'Express',
    fecha: '2026-05-21T15:10:00',
    fechaIngresoRiesgos: '2026-05-21T15:10:00',
    estado: 'Pendiente',
    estadoType: 'pendiente',
    comentarios: '',
    analistaAsignado: 'María Fe Cárdenas',
    usuarioAnalista: 'mcardenas',
    etapa: 'Riesgos'
  },
  {
    solicitud: 'EFE007',
    nombreCliente: 'Toledo Salazar Rafael Carlos',
    nDocumento: '12345678',
    tipoDocumento: 'RUC',
    concesionario: 'TOYOTA',
    tienda: 'SAN MIGUEL',
    usuarioEjecutivo: 'María López',
    canal: 'Vendedor',
    carretera: 'Escritorio',
    fecha: '2026-05-21T16:30:00',
    fechaIngresoRiesgos: '2026-05-21T16:30:00',
    estado: 'Pendiente',
    estadoType: 'pendiente',
    comentarios: '',
    analistaAsignado: 'María Fe Cárdenas',
    usuarioAnalista: 'mcardenas',
    etapa: 'Riesgos'
  },
  {
    solicitud: 'EFE004',
    nombreCliente: 'Salazar Garcia Ana Maria',
    nDocumento: '12345678',
    tipoDocumento: 'DNI',
    concesionario: 'HYUNDAI',
    tienda: 'SAN MIGUEL',
    usuarioEjecutivo: 'Juan Pérez',
    canal: 'Ejecutivo',
    carretera: 'Full',
    fecha: '2026-05-21T11:45:00',
    fechaIngresoRiesgos: '2026-05-21T11:45:00',
    estado: 'Pendiente',
    estadoType: 'pendiente',
    comentarios: '',
    analistaAsignado: 'María Fe Cárdenas',
    usuarioAnalista: 'mcardenas',
    etapa: 'Riesgos'
  },
  {
    solicitud: 'EFE003',
    nombreCliente: 'Morales Diaz Luis Alberto',
    nDocumento: '12345678',
    tipoDocumento: 'CE',
    concesionario: 'TOYOTA',
    tienda: 'PURUCHUCO',
    usuarioEjecutivo: 'María López',
    canal: 'Vendedor',
    carretera: 'Express',
    fecha: '2026-05-21T10:30:00',
    fechaIngresoRiesgos: '2026-05-21T10:30:00',
    estado: 'Pendiente',
    estadoType: 'pendiente',
    comentarios: '',
    analistaAsignado: 'María Fe Cárdenas',
    usuarioAnalista: 'mcardenas',
    etapa: 'Riesgos'
  },
  {
    solicitud: 'EFE009',
    nombreCliente: 'Melgar Salazar Jose Carlos',
    nDocumento: '12345678',
    tipoDocumento: 'Pasaporte',
    concesionario: 'HYUNDAI',
    tienda: 'SAN MIGUEL',
    usuarioEjecutivo: 'María López',
    canal: 'Vendedor',
    carretera: 'Escritorio',
    fecha: '2026-05-22T09:45:00',
    fechaIngresoRiesgos: '2026-05-22T09:45:00',
    estado: 'Pendiente',
    estadoType: 'pendiente',
    comentarios: '',
    analistaAsignado: 'María Fe Cárdenas',
    usuarioAnalista: 'mcardenas',
    etapa: 'Riesgos'
  },
  {
    solicitud: 'EFE002',
    nombreCliente: 'Gomez Rojas Andrea',
    nDocumento: '12345678',
    tipoDocumento: 'RUC',
    concesionario: 'HYUNDAI',
    tienda: 'LA MOLINA',
    usuarioEjecutivo: 'Juan Pérez',
    canal: 'Ejecutivo',
    carretera: 'Semi full',
    fecha: '2026-05-20T17:20:00',
    fechaIngresoRiesgos: '2026-05-20T17:20:00',
    estado: 'Pendiente',
    estadoType: 'pendiente',
    comentarios: '',
    analistaAsignado: 'María Fe Cárdenas',
    usuarioAnalista: 'mcardenas',
    etapa: 'Riesgos'
  },
  {
    solicitud: 'EFE008',
    nombreCliente: 'Perez Garcia Pedro Juan',
    nDocumento: '12345678',
    tipoDocumento: 'DNI',
    concesionario: 'TOYOTA',
    tienda: 'PURUCHUCO',
    usuarioEjecutivo: 'Juan Pérez',
    canal: 'Ejecutivo',
    carretera: 'Express',
    fecha: '2026-05-22T09:20:00',
    fechaIngresoRiesgos: '2026-05-22T09:20:00',
    estado: 'Pendiente',
    estadoType: 'pendiente',
    comentarios: '',
    analistaAsignado: 'María Fe Cárdenas',
    usuarioAnalista: 'mcardenas',
    etapa: 'Riesgos'
  }
];

// Initialize records preserving localStorage so decisions and comment history remain registered
let records = JSON.parse(localStorage.getItem('efectiva_records') || 'null') || [...defaultRecords];

// Guarantee EFE004 has carretera 'Full' and dynamically update dates relative to now for SLA demo
const efe004 = records.find(r => r.solicitud === 'EFE004');
if (efe004 && efe004.carretera !== 'Full') {
  efe004.carretera = 'Full';
}

const relativeSlaOffsets = {
  'EFE001': 1.2,   // 1.2 hours ago (within 3h, green)
  'EFE005': 4.5,   // 4.5 hours ago (outside 3h, red)
  'EFE006': 2.1,   // 2.1 hours ago (within 3h, green)
  'EFE007': 5.2,   // 5.2 hours ago (outside 3h, red)
  'EFE004': 6.8,   // 6.8 hours ago (outside 3h, red)
  'EFE003': 0.7,   // 0.7 hours ago (within 3h, green)
  'EFE009': 8.5,   // 8.5 hours ago (outside 3h, red)
  'EFE002': 2.8,   // 2.8 hours ago (within 3h, green)
  'EFE008': 10.2   // 10.2 hours ago (outside 3h, red)
};

const nowMs = Date.now();
records.forEach(r => {
  const offset = relativeSlaOffsets[r.solicitud];
  if (offset !== undefined) {
    const freshIsoDate = new Date(nowMs - offset * 60 * 60 * 1000).toISOString();
    r.fecha = freshIsoDate;
    r.fechaIngresoRiesgos = freshIsoDate;
  }
});
if (!localStorage.getItem('efectiva_records')) {
  localStorage.setItem('efectiva_records', JSON.stringify(records));
}

// SVG Icons for different states
const statusIcons = {
  rechazado: `<svg class="status-icon" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/></svg>`,
  respuesta: `<svg class="status-icon" viewBox="0 0 24 24"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/></svg>`,
  observado: `<svg class="status-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
  deriv: `<svg class="status-icon" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`,
  pendiente: `<svg class="status-icon" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>`,
  aprobado: `<svg class="status-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
  'mayor-inicial': `<svg class="status-icon" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>`
};

const usuarioAnalistaSesion = 'mcardenas';

// Helper functions to map raw status values to requested status columns
function getMappedEstado(estado) {
  if (estado === 'Pendiente') {
    return 'Pendiente';
  }
  if (estado === 'Observado' || estado === 'Respuesta') {
    return 'Observado';
  }
  if (estado === 'Aprobado') {
    return 'Aprobado';
  }
  if (estado === 'Rechazado') {
    return 'Rechazado';
  }
  if (estado === 'Mayor Inicial Requerida') {
    return 'Mayor Inicial Requerida';
  }
  if (estado === 'Deriv. Jefe') {
    return 'Deriv. Jefe';
  }
  return estado;
}

function getMappedEstadoType(estado) {
  const mapped = getMappedEstado(estado);
  if (mapped === 'Mayor Inicial Requerida') return 'mayor-inicial';
  if (mapped === 'Deriv. Jefe') return 'deriv';
  return mapped.toLowerCase();
}

function getSLABadge(fecha) {
  const diffMs = Date.now() - new Date(fecha);
  const diffHrs = diffMs / (1000 * 60 * 60);
  const totalMinutes = Math.max(0, Math.floor(diffMs / (1000 * 60)));
  const hrs = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const label = `${hrs}h ${mins}m`;
  
  // Max SLA is 3 hours: green if within 3h, red (vencido) if outside 3h
  const type = (diffHrs <= 3) ? 'green' : 'vencido';
  
  return { label, type, minutes: totalMinutes };
}

// Global active data state
let activeRecords = records.filter(r => r.usuarioAnalista === usuarioAnalistaSesion);
let slaSortDirection = null; // 'asc' or 'desc' or null

// Parse date input (YYYY-MM-DD) safely into local date midnight
function parseInputDate(dateStr) {
  if (!dateStr) return null;
  const parts = dateStr.split('-');
  if (parts.length !== 3) return null;
  return new Date(parts[0], parts[1] - 1, parts[2]);
}

// Format ISO date (2026-05-21T14:05:00) into DD-MM-YYYY HH:mm
function formatDate(dateStr) {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${day}-${month}-${year} ${hours}:${minutes}`;
}

// Function to populate select options dynamically
function initFilterDropdowns() {
  const selects = {
    concesionario: new Set(),
    tienda: new Set(),
    carretera: new Set(),
    estado: new Set()
  };

  records.forEach(r => {
    if (r.concesionario) selects.concesionario.add(r.concesionario);
    if (r.tienda) selects.tienda.add(r.tienda);
    if (r.carretera) selects.carretera.add(r.carretera);
    if (r.estado) selects.estado.add(getMappedEstado(r.estado));
  });

  // Populate dropdown menus
  for (const [key, set] of Object.entries(selects)) {
    const selectEl = document.getElementById(`filter-${key}`);
    if (!selectEl) continue;
    
    // Clear dynamic options, keep the first "Seleccionar"
    while (selectEl.options.length > 1) {
      selectEl.remove(1);
    }
    
    // Sort and append options
    Array.from(set).sort().forEach(optionValue => {
      const option = document.createElement('option');
      option.value = optionValue;
      option.textContent = optionValue;
      selectEl.appendChild(option);
    });
  }
}

// Populate details modal
function openDetailModal(solicitudId) {
  const record = records.find(r => r.solicitud === solicitudId);
  if (!record) return;

  const modalBody = document.getElementById('modal-details-body');
  
  modalBody.innerHTML = `
    <div class="detail-grid">
      <div class="detail-item">
        <span class="detail-label">Solicitud</span>
        <span class="detail-val">${record.solicitud}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Nombre Cliente</span>
        <span class="detail-val">${record.nombreCliente}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Nº Documento</span>
        <span class="detail-val">${record.nDocumento}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Concesionario</span>
        <span class="detail-val">${record.concesionario}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Tienda</span>
        <span class="detail-val">${record.tienda}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Usuario (Ejecutivo)</span>
        <span class="detail-val">${record.usuarioEjecutivo}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Carretera</span>
        <span class="detail-val">${record.carretera}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Fecha Creación</span>
        <span class="detail-val">${formatDate(record.fecha)}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">SLA Restante</span>
        <span class="detail-val">
          <span class="sla-badge sla-${record.slaType}">${record.slaText}</span>
        </span>
      </div>
      <div class="detail-item" style="grid-column: span 2;">
        <span class="detail-label">Etapa</span>
        <span class="detail-val">Riesgos</span>
      </div>
      <div class="detail-item" style="grid-column: span 2;">
        <span class="detail-label">Estado de la Solicitud</span>
        <div>
          <span class="status-pill status-${getMappedEstadoType(record.estado)}">
            ${statusIcons[getMappedEstadoType(record.estado)]}
            ${getMappedEstado(record.estado)}
          </span>
        </div>
      </div>
    </div>
  `;

  const modal = document.getElementById('details-modal');
  modal.classList.add('open');
}

function closeDetailModal() {
  const modal = document.getElementById('details-modal');
  modal.classList.remove('open');
}

function goToReview(solicitudId) {
  mostrarDetalle(solicitudId);
}

function mostrarBandeja() {
  const revisarView = document.getElementById('revisar-view');
  if (revisarView) revisarView.classList.add('hidden');

  const bandejaView = document.getElementById('bandeja-view');
  if (bandejaView) bandejaView.classList.add('hidden');

  const solicitudesView = document.getElementById('solicitudes-view');
  if (solicitudesView) solicitudesView.classList.remove('hidden');

  records = JSON.parse(localStorage.getItem('efectiva_records')) || [...defaultRecords];
  initSolicitudesFilterDropdowns();
  renderSolicitudesTable();
}

function volverABandeja() {
  mostrarBandeja();
}

function mostrarDetalle(solicitudId) {
  const bandejaView = document.getElementById('bandeja-view');
  if (bandejaView) bandejaView.classList.add('hidden');
  const solicitudesView = document.getElementById('solicitudes-view');
  if (solicitudesView) solicitudesView.classList.add('hidden');

  const revisarView = document.getElementById('revisar-view');
  if (revisarView) revisarView.classList.remove('hidden');
  
  if (typeof initDetailView === 'function') {
    initDetailView(solicitudId);
  }
}

// Function to render table content
function renderTable() {
  const tbody = document.getElementById('table-body');
  const totalCountEl = document.getElementById('total-results-count');
  
  // Clear previous rows
  tbody.innerHTML = '';
  
  // Default sort by fechaIngresoRiesgos DESC if no SLA sort is active
  if (!slaSortDirection) {
    activeRecords.sort((a, b) => new Date(b.fechaIngresoRiesgos) - new Date(a.fechaIngresoRiesgos));
  }
  
  if (activeRecords.length === 0) {
    // Render Empty State
    tbody.innerHTML = `
      <tr>
        <td colspan="12">
          <div class="empty-state">
            <svg viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <h3>No existen solicitudes para los criterios de búsqueda ingresados.</h3>
          </div>
        </td>
      </tr>
    `;
    totalCountEl.textContent = '0';
    return;
  }

  // Render record rows
  activeRecords.forEach(record => {
    const tr = document.createElement('tr');
    const slaBadge = getSLABadge(record.fechaIngresoRiesgos);
    
    tr.innerHTML = `
      <td class="col-solicitud">${record.solicitud}</td>
      <td>${record.tipoDocumento || 'DNI'}</td>
      <td>${record.nDocumento}</td>
      <td>${record.nombreCliente}</td>
      <td>${record.concesionario}</td>
      <td>${record.tienda}</td>
      <td class="col-ejecutivo">${record.usuarioEjecutivo}</td>
      <td>${formatDate(record.fechaIngresoRiesgos)}</td>
      <td>
        <span class="sla-badge sla-${slaBadge.type}">${slaBadge.label}</span>
      </td>
      <td>${record.etapa || 'Riesgos'}</td>
      <td>
        <span class="status-pill status-${getMappedEstadoType(record.estado)}">
          ${statusIcons[getMappedEstadoType(record.estado)] || ''}
          ${getMappedEstado(record.estado)}
        </span>
      </td>
      <td>
        <button class="btn-revisar" onclick="goToReview('${record.solicitud}')">Revisar</button>
      </td>
    `;
    
    tbody.appendChild(tr);
  });
  
  totalCountEl.textContent = activeRecords.length;
}

// Function to filter records
function applyFilters() {
  const filterSolicitud = document.getElementById('filter-solicitud').value.trim().toLowerCase();
  const filterTipoDocumento = document.getElementById('filter-tipo-documento').value;
  const filterDocumento = document.getElementById('filter-documento').value.trim().toLowerCase();
  const filterCliente = document.getElementById('filter-cliente').value.trim().toLowerCase();
  const filterConcesionario = document.getElementById('filter-concesionario').value;
  const filterTienda = document.getElementById('filter-tienda').value;
  const filterEjecutivo = document.getElementById('filter-ejecutivo').value.trim().toLowerCase();
  const filterCarretera = document.getElementById('filter-carretera').value;
  const filterEstado = document.getElementById('filter-estado').value;
  const filterFechaDesde = document.getElementById('filter-fecha-desde').value;
  const filterFechaHasta = document.getElementById('filter-fecha-hasta').value;

  activeRecords = records.filter(record => {
    // Only show current analyst load
    if (record.usuarioAnalista !== usuarioAnalistaSesion) {
      return false;
    }
    // Solicitud text filter
    if (filterSolicitud && !record.solicitud.toLowerCase().includes(filterSolicitud)) {
      return false;
    }
    // Tipo documento filter
    if (filterTipoDocumento !== 'Seleccionar' && (record.tipoDocumento || 'DNI') !== filterTipoDocumento) {
      return false;
    }
    // Documento text filter
    if (filterDocumento && !record.nDocumento.toLowerCase().includes(filterDocumento)) {
      return false;
    }
    // Cliente text filter
    if (filterCliente && !record.nombreCliente.toLowerCase().includes(filterCliente)) {
      return false;
    }
    // Concesionario select filter
    if (filterConcesionario !== 'Seleccionar' && record.concesionario !== filterConcesionario) {
      return false;
    }
    // Tienda select filter
    if (filterTienda !== 'Seleccionar' && record.tienda !== filterTienda) {
      return false;
    }
    // Ejecutivo text filter
    if (filterEjecutivo && !record.usuarioEjecutivo.toLowerCase().includes(filterEjecutivo)) {
      return false;
    }
    // Carretera select filter
    if (filterCarretera !== 'Seleccionar' && record.carretera !== filterCarretera) {
      return false;
    }
    // Estado select filter
    if (filterEstado !== 'Seleccionar' && getMappedEstado(record.estado) !== filterEstado) {
      return false;
    }
    
    // Date ranges
    if (filterFechaDesde) {
      const recordDate = new Date(record.fechaIngresoRiesgos);
      recordDate.setHours(0,0,0,0);
      const desdeDate = parseInputDate(filterFechaDesde);
      if (desdeDate && recordDate < desdeDate) return false;
    }
    
    if (filterFechaHasta) {
      const recordDate = new Date(record.fechaIngresoRiesgos);
      recordDate.setHours(0,0,0,0);
      const hastaDate = parseInputDate(filterFechaHasta);
      if (hastaDate && recordDate > hastaDate) return false;
    }

    return true;
  });

  // Re-apply sorting if active
  if (slaSortDirection) {
    sortActiveBySLA(true); // maintain current direction
  } else {
    renderTable();
  }
}

// Reset filters
function clearFilters() {
  document.getElementById('filter-solicitud').value = '';
  document.getElementById('filter-tipo-documento').selectedIndex = 0;
  document.getElementById('filter-documento').value = '';
  document.getElementById('filter-cliente').value = '';
  document.getElementById('filter-concesionario').selectedIndex = 0;
  document.getElementById('filter-tienda').selectedIndex = 0;
  document.getElementById('filter-ejecutivo').value = '';
  document.getElementById('filter-carretera').selectedIndex = 0;
  document.getElementById('filter-estado').selectedIndex = 0;
  document.getElementById('filter-fecha-desde').value = '';
  document.getElementById('filter-fecha-hasta').value = '';
  
  // Reset sorting state
  slaSortDirection = null;
  const sortBtn = document.getElementById('sort-sla-btn');
  if (sortBtn) sortBtn.classList.remove('sort-desc');
  
  activeRecords = records.filter(r => r.usuarioAnalista === usuarioAnalistaSesion);
  renderTable();
}

// Sort SLA Column
function toggleSLASort() {
  const sortBtn = document.getElementById('sort-sla-btn');
  
  if (slaSortDirection === null || slaSortDirection === 'desc') {
    slaSortDirection = 'asc';
    sortBtn.classList.remove('sort-desc');
  } else {
    slaSortDirection = 'desc';
    sortBtn.classList.add('sort-desc');
  }
  
  sortActiveBySLA();
}

function sortActiveBySLA(maintainState = false) {
  if (!slaSortDirection) return;
  
  activeRecords.sort((a, b) => {
    const minutesA = getSLABadge(a.fechaIngresoRiesgos).minutes;
    const minutesB = getSLABadge(b.fechaIngresoRiesgos).minutes;
    if (slaSortDirection === 'asc') {
      return minutesA - minutesB;
    } else {
      return minutesB - minutesA;
    }
  });
  
  renderTable();
}

// Initialization on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  initFilterDropdowns();
  renderTable();

  // Auto-filter Event bindings
  const textInputs = ['filter-solicitud', 'filter-documento', 'filter-ejecutivo', 'filter-cliente'];
  textInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', applyFilters);
  });

  const selectAndDateInputs = [
    'filter-concesionario',
    'filter-tienda',
    'filter-carretera',
    'filter-estado',
    'filter-fecha-desde',
    'filter-fecha-hasta',
    'filter-tipo-documento'
  ];
  selectAndDateInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', applyFilters);
  });

  document.getElementById('btn-limpiar').addEventListener('click', clearFilters);
  document.getElementById('sort-sla-btn').addEventListener('click', toggleSLASort);
  document.getElementById('modal-close').addEventListener('click', closeDetailModal);
  
  // Close modal when clicking outside overlay card
  document.getElementById('details-modal').addEventListener('click', (e) => {
    if (e.target.id === 'details-modal') {
      closeDetailModal();
    }
  });

  // Login Event Listeners
  document.getElementById('btnLoginSubmit')?.addEventListener('click', handleLogin);
  document.getElementById('btnLoginClear')?.addEventListener('click', clearLogin);
  document.getElementById('closeLoginAlertModal')?.addEventListener('click', closeLoginAlert);
  document.getElementById('loginAlertModal')?.addEventListener('click', e => { 
    if (e.target.id === 'loginAlertModal') closeLoginAlert(); 
  });
  document.getElementById('forgotPasswordBtn')?.addEventListener('click', e => {
    e.preventDefault();
    showLoginAlert("Por favor, comuníquese con soporte para restablecer su contraseña.", "Información");
  });
  document.getElementById('loginUser')?.addEventListener('keypress', e => { if (e.key === 'Enter') handleLogin(); });
  document.getElementById('loginPass')?.addEventListener('keypress', e => { if (e.key === 'Enter') handleLogin(); });

  initSolicitudesFilterDropdowns();
  const solTextInputs = ['sol-filter-solicitud', 'sol-filter-documento', 'sol-filter-ejecutivo', 'sol-filter-cliente'];
  solTextInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', applySolicitudesFilters);
  });

  const solSelectAndDateInputs = [
    'sol-filter-concesionario',
    'sol-filter-tienda',
    'sol-filter-estado',
    'sol-filter-fecha-desde',
    'sol-filter-fecha-hasta',
    'sol-filter-tipo-documento'
  ];
  solSelectAndDateInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', applySolicitudesFilters);
  });

  document.getElementById('sol-btn-limpiar')?.addEventListener('click', clearSolicitudesFilters);
});

// --- Lógica del Splash Screen & Login ---
let loginAttempts = 0;
const MAX_ATTEMPTS = 3;

(function() {
  const splash = document.getElementById('splashScreen');
  const p1 = document.getElementById('splashPhase1');
  const p2 = document.getElementById('splashPhase2');
  
  if (p1 && p2) {
    // Fase 1 a Fase 2 a los 1000ms
    setTimeout(() => {
      p1.style.opacity = '0';
      setTimeout(() => {
        p1.style.display = 'none';
        p2.style.display = 'flex';
        p2.offsetHeight; // force reflow
        p2.style.opacity = '1';
      }, 300);
    }, 1000);
  }
  
  // Ocultar splash screen a los 2000ms y mostrar login
  setTimeout(() => {
    if (splash) {
      splash.style.opacity = '0';
      setTimeout(() => {
        splash.remove();
        const loginView = document.getElementById('loginView');
        if (loginView) loginView.classList.remove('hidden');
      }, 500);
    }
  }, 2000);
})();

function showLoginAlert(message, title = "Error") {
  const modal = document.getElementById('loginAlertModal');
  const msgEl = document.getElementById('loginAlertMessage');
  const titleEl = document.getElementById('loginAlertTitle');
  const iconEl = document.getElementById('loginAlertIcon');
  if (modal && msgEl && titleEl) {
    titleEl.textContent = title;
    msgEl.textContent = message;
    if (iconEl) {
      if (title === "Error" || title === "Bloqueado") {
        iconEl.style.background = "#fee2e2";
        iconEl.style.color = "#ef4444";
        iconEl.textContent = "⚠";
      } else {
        iconEl.style.background = "#e0f2fe";
        iconEl.style.color = "#0284c7";
        iconEl.textContent = "ℹ";
      }
    }
    modal.classList.remove('hidden');
  } else {
    alert(message);
  }
}

function closeLoginAlert() {
  const modal = document.getElementById('loginAlertModal');
  if (modal) modal.classList.add('hidden');
}

function handleLogin() {
  const userEl = document.getElementById('loginUser');
  const passEl = document.getElementById('loginPass');
  if (!userEl || !passEl) return;

  const username = userEl.value.trim();
  const password = passEl.value;

  if (loginAttempts >= MAX_ATTEMPTS + 1) {
    showLoginAlert("El usuario ha sido bloqueado, comunicarse con soporte", "Bloqueado");
    return;
  }

  if ((username.toUpperCase() === 'AUGCHA' || username.toLowerCase() === 'mcardenas') && password === '123456') {
    // Éxito
    const loginView = document.getElementById('loginView');
    if (loginView) loginView.classList.add('hidden');
    
    // Actualizar saludo del usuario en la cabecera
    const greetingEl = document.querySelector('.user-profile span');
    if (greetingEl) {
      greetingEl.textContent = `Hola, ${username.toUpperCase()}`;
    }
    
    // Mostrar la aplicación principal
    const appHeader = document.querySelector('.app-header');
    if (appHeader) appHeader.classList.remove('hidden');
    
    const bandejaView = document.getElementById('bandeja-view');
    if (bandejaView) bandejaView.classList.add('hidden');
    const solicitudesView = document.getElementById('solicitudes-view');
    if (solicitudesView) solicitudesView.classList.remove('hidden');
    initSolicitudesFilterDropdowns();
    renderSolicitudesTable();
  } else {
    loginAttempts++;
    if (loginAttempts >= 4) {
      showLoginAlert("El usuario ha sido bloqueado, comunicarse con soporte", "Bloqueado");
    } else {
      showLoginAlert("Usuario o contraseña mal ingresados o no existen", "Error");
    }
  }
}

function clearLogin() {
  const userEl = document.getElementById('loginUser');
  const passEl = document.getElementById('loginPass');
  if (userEl) userEl.value = '';
  if (passEl) passEl.value = '';
}

// Global Toast notification helper
function showToast(message, type = 'success') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.style.position = 'fixed';
    container.style.top = '20px';
    container.style.right = '20px';
    container.style.zIndex = '9999';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.gap = '10px';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.style.minWidth = '250px';
  toast.style.padding = '0.75rem 1.25rem';
  toast.style.borderRadius = '8px';
  toast.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)';
  toast.style.fontSize = '0.75rem';
  toast.style.fontWeight = '700';
  toast.style.fontFamily = 'Inter, sans-serif';
  toast.style.color = '#ffffff';
  toast.style.opacity = '0';
  toast.style.transform = 'translateY(-20px)';
  toast.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  
  if (type === 'success') {
    toast.style.backgroundColor = '#10b981';
  } else if (type === 'error') {
    toast.style.backgroundColor = '#ef4444';
  } else if (type === 'info') {
    toast.style.backgroundColor = '#3b82f6';
  } else if (type === 'warning') {
    toast.style.backgroundColor = '#f59e0b';
  }

  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateY(0)';
  }, 10);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// ============================
// MODULE: Solicitudes
// ============================

function showModule(moduleName) {
  // Solo existe el módulo Solicitudes. Cualquier intento de abrir Bandeja redirige a Solicitudes.
  const bandejaView = document.getElementById('bandeja-view');
  const solicitudesView = document.getElementById('solicitudes-view');
  const revisarView = document.getElementById('revisar-view');

  if (revisarView) revisarView.classList.add('hidden');
  if (bandejaView) bandejaView.classList.add('hidden');
  if (solicitudesView) solicitudesView.classList.remove('hidden');

  records = JSON.parse(localStorage.getItem('efectiva_records')) || [...defaultRecords];
  initSolicitudesFilterDropdowns();
  renderSolicitudesTable();
}


function initSolicitudesFilterDropdowns() {
  const selects = {
    concesionario: new Set(),
    tienda: new Set(),
    estado: new Set(['Pendiente', 'Aprobado', 'Observado', 'Rechazado', 'Deriv. Jefe', 'Mayor Inicial Requerida'])
  };

  records = JSON.parse(localStorage.getItem('efectiva_records')) || [...defaultRecords];

  records.forEach(r => {
    if (r.concesionario) selects.concesionario.add(r.concesionario);
    if (r.tienda) selects.tienda.add(r.tienda);
    if (r.estado) selects.estado.add(getMappedEstado(r.estado));
  });

  for (const [key, set] of Object.entries(selects)) {
    const selectEl = document.getElementById(`sol-filter-${key}`);
    if (!selectEl) continue;

    while (selectEl.options.length > 1) {
      selectEl.remove(1);
    }

    Array.from(set).sort((a, b) => {
      if (a === 'Pendiente') return -1;
      if (b === 'Pendiente') return 1;
      return a.localeCompare(b);
    }).forEach(optionValue => {
      const option = document.createElement('option');
      option.value = optionValue;
      option.textContent = optionValue;
      selectEl.appendChild(option);
    });
  }

  const estadoEl = document.getElementById('sol-filter-estado');
  if (estadoEl && estadoEl.value === 'Seleccionar') {
    estadoEl.value = 'Pendiente';
  }
}

function getSolicitudesFiltradas() {
  const filterSolicitud = document.getElementById('sol-filter-solicitud')?.value.trim().toLowerCase() || '';
  const filterTipoDocumento = document.getElementById('sol-filter-tipo-documento')?.value || 'Seleccionar';
  const filterDocumento = document.getElementById('sol-filter-documento')?.value.trim().toLowerCase() || '';
  const filterCliente = document.getElementById('sol-filter-cliente')?.value.trim().toLowerCase() || '';
  const filterConcesionario = document.getElementById('sol-filter-concesionario')?.value || 'Seleccionar';
  const filterTienda = document.getElementById('sol-filter-tienda')?.value || 'Seleccionar';
  const filterEjecutivo = document.getElementById('sol-filter-ejecutivo')?.value.trim().toLowerCase() || '';
  const filterEstado = document.getElementById('sol-filter-estado')?.value || 'Pendiente';
  const filterFechaDesde = document.getElementById('sol-filter-fecha-desde')?.value || '';
  const filterFechaHasta = document.getElementById('sol-filter-fecha-hasta')?.value || '';
  const estadoAplicado = filterEstado === 'Seleccionar' ? 'Pendiente' : filterEstado;

  return records.filter(record => {
    if (filterSolicitud && !record.solicitud.toLowerCase().includes(filterSolicitud)) return false;
    if (filterTipoDocumento !== 'Seleccionar' && (record.tipoDocumento || 'DNI') !== filterTipoDocumento) return false;
    if (filterDocumento && !String(record.nDocumento || '').toLowerCase().includes(filterDocumento)) return false;
    if (filterCliente && !String(record.nombreCliente || '').toLowerCase().includes(filterCliente)) return false;
    if (filterConcesionario !== 'Seleccionar' && record.concesionario !== filterConcesionario) return false;
    if (filterTienda !== 'Seleccionar' && record.tienda !== filterTienda) return false;
    if (filterEjecutivo && !String(record.usuarioEjecutivo || '').toLowerCase().includes(filterEjecutivo)) return false;
    if (getMappedEstado(record.estado) !== estadoAplicado) return false;

    const recordDate = new Date(record.fechaIngresoRiesgos || record.fecha);
    if (filterFechaDesde) {
      const desdeDate = parseInputDate(filterFechaDesde);
      if (desdeDate && recordDate < desdeDate) return false;
    }
    if (filterFechaHasta) {
      const hastaDate = parseInputDate(filterFechaHasta);
      if (hastaDate) {
        hastaDate.setHours(23, 59, 59, 999);
        if (recordDate > hastaDate) return false;
      }
    }

    return true;
  });
}

function applySolicitudesFilters() {
  renderSolicitudesTable();
}

function clearSolicitudesFilters() {
  const setValue = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.value = value;
  };

  setValue('sol-filter-solicitud', '');
  setValue('sol-filter-tipo-documento', 'Seleccionar');
  setValue('sol-filter-documento', '');
  setValue('sol-filter-cliente', '');
  setValue('sol-filter-concesionario', 'Seleccionar');
  setValue('sol-filter-tienda', 'Seleccionar');
  setValue('sol-filter-ejecutivo', '');
  setValue('sol-filter-estado', 'Pendiente');
  setValue('sol-filter-fecha-desde', '');
  setValue('sol-filter-fecha-hasta', '');

  renderSolicitudesTable();
}

function renderSolicitudesTable() {
  const tbody = document.getElementById('solicitudes-table-body');
  const totalCountEl = document.getElementById('sol-total-results-count');
  if (!tbody) return;

  records = JSON.parse(localStorage.getItem('efectiva_records')) || [...defaultRecords];
  tbody.innerHTML = '';

  const solRecords = getSolicitudesFiltradas().sort((a, b) => new Date(b.fechaIngresoRiesgos || b.fecha) - new Date(a.fechaIngresoRiesgos || a.fecha));

  if (solRecords.length === 0) {
    tbody.innerHTML = `<tr><td colspan="11" style="text-align: center; padding: 2rem; color: var(--text-muted); font-weight: 600;">No existen solicitudes para los criterios de búsqueda ingresados.</td></tr>`;
    if (totalCountEl) totalCountEl.textContent = '0';
    return;
  }

  solRecords.forEach(r => {
    const fechaBase = r.fechaIngresoRiesgos || r.fecha;
    const fechaStr = formatDate(fechaBase);
    const estadoType = getMappedEstadoType(r.estado);
    const estadoLabel = getMappedEstado(r.estado);
    const isPendiente = estadoLabel === 'Pendiente';

    const row = document.createElement('tr');
    row.innerHTML = `
      <td style="font-weight: 700; color: #0b4ec2;">${r.solicitud}</td>
      <td>${r.tipoDocumento || 'DNI'}</td>
      <td>${r.nDocumento}</td>
      <td style="font-weight: 600;">${r.nombreCliente}</td>
      <td>${r.concesionario}</td>
      <td style="font-weight: 600; color: #0b4ec2;">${r.tienda}</td>
      <td style="font-weight: 600;">${r.usuarioEjecutivo}</td>
      <td>${fechaStr}</td>
      <td>${r.etapa || 'Riesgos'}</td>
      <td>
        <span class="status-pill status-${estadoType}">
          ${statusIcons[estadoType] || ''}
          ${estadoLabel}
        </span>
      </td>
      <td>
        ${isPendiente ? `
          <button class="btn-tomar" onclick="openTomarModal('${r.solicitud}')">
            <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            Tomar
          </button>` : `
          <button class="btn-revisar" onclick="goToReview('${r.solicitud}')">Revisar</button>`}
      </td>
    `;
    tbody.appendChild(row);
  });

  if (totalCountEl) totalCountEl.textContent = solRecords.length;
}

// Tomar modal
let tomarSolicitudId = null;

function openTomarModal(solicitudId) {
  tomarSolicitudId = solicitudId;
  const modal = document.getElementById('tomar-confirm-modal');
  const text = document.getElementById('tomar-confirm-text');
  if (text) text.textContent = `¿Desea tomar la solicitud ${solicitudId} para su bandeja?`;
  if (modal) modal.classList.add('open');
}

function closeTomarModal() {
  const modal = document.getElementById('tomar-confirm-modal');
  if (modal) modal.classList.remove('open');
  tomarSolicitudId = null;
}

function confirmTomar() {
  if (!tomarSolicitudId) return;
  const solicitudSeleccionada = tomarSolicitudId;
  closeTomarModal();

  records = JSON.parse(localStorage.getItem('efectiva_records')) || [...defaultRecords];
  records = records.map(r => r.solicitud === solicitudSeleccionada ? {
    ...r,
    etapa: 'Riesgos',
    estado: r.estado || 'Pendiente',
    estadoType: r.estadoType || 'pendiente',
    analistaAsignado: 'María Fe Cárdenas',
    usuarioAnalista: usuarioAnalistaSesion
  } : r);
  localStorage.setItem('efectiva_records', JSON.stringify(records));

  showToast(`Solicitud ${solicitudSeleccionada} tomada exitosamente.`);
  mostrarDetalle(solicitudSeleccionada);
}

// Bind confirm button for Tomar modal
document.addEventListener('DOMContentLoaded', () => {
  const btnConfirmarTomar = document.getElementById('btn-confirmar-tomar');
  if (btnConfirmarTomar) {
    btnConfirmarTomar.addEventListener('click', confirmTomar);
  }
});

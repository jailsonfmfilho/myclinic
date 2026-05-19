/**
 * MyClinic - Dashboard Page
 * Dashboard para Admin e Terapeutas
 */

const pages = {};
const pageScripts = {};

pages['dashboard'] = function() {
  const isAdmin = hasRole('admin');
  
  return `
    <div class="top-bar">
      <div>
        <h1>Dashboard</h1>
        <p style="font-size:13px;color:var(--text-muted);">Visão geral — ${UI.formatDate(new Date())}</p>
      </div>
      <div style="display:flex;gap:10px;">
        ${isAdmin ? `<button class="btn btn-outline btn-sm" onclick="navigateTo('usuarios')" aria-label="Gerenciar usuários"><i class="fa-solid fa-users"></i> Gerenciar usuários</button>` : ''}
        <button class="btn btn-sage btn-sm" onclick="openAppointmentModal()" aria-label="Criar novo agendamento"><i class="fa-solid fa-plus"></i> Novo agendamento</button>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <i class="fa-solid fa-hospital-user stat-icon"></i>
        <div class="stat-label">Pacientes ativos</div>
        <div class="stat-value">48</div>
        <div class="stat-change up">↑ 4 este mês</div>
      </div>
      <div class="stat-card">
        <i class="fa-solid fa-calendar-check stat-icon"></i>
        <div class="stat-label">Sessões hoje</div>
        <div class="stat-value">9</div>
        <div class="stat-change up">↑ 2 vs ontem</div>
      </div>
      <div class="stat-card">
        <i class="fa-solid fa-file-medical stat-icon"></i>
        <div class="stat-label">Relatórios pendentes</div>
        <div class="stat-value">6</div>
        <div class="stat-change down">↓ 2 pendentes</div>
      </div>
      <div class="stat-card">
        <i class="fa-solid fa-dollar-sign stat-icon"></i>
        <div class="stat-label">Faturamento do mês</div>
        <div class="stat-value">${UI.formatCurrency(28400)}</div>
        <div class="stat-change up">↑ 12% vs anterior</div>
      </div>
    </div>

    <div class="grid-2">
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;">
          <h2 style="font-family:Lora,serif;font-size:16px;font-weight:600;">Sessões de hoje</h2>
          <button class="btn btn-outline btn-sm" onclick="navigateTo('agendamentos')" aria-label="Ver agenda completa">Ver agenda</button>
        </div>
        <ul class="appt-list">
          <li class="appt-item">
            <span class="appt-time">08:00</span>
            <div style="flex:1;">
              <div class="appt-name">Ana Beatriz Costa</div>
              <div class="appt-type">Reabilitação sensorial</div>
            </div>
            <span class="badge badge-green">Confirmado</span>
          </li>
          <li class="appt-item">
            <span class="appt-time">09:00</span>
            <div style="flex:1;">
              <div class="appt-name">Pedro Henrique Lima</div>
              <div class="appt-type">Coordenação motora</div>
            </div>
            <span class="badge badge-green">Confirmado</span>
          </li>
          <li class="appt-item">
            <span class="appt-time">10:30</span>
            <div style="flex:1;">
              <div class="appt-name">Mariana Santos</div>
              <div class="appt-type">AVDs — Saúde mental</div>
            </div>
            <span class="badge badge-blue">Em andamento</span>
          </li>
          <li class="appt-item">
            <span class="appt-time">14:00</span>
            <div style="flex:1;">
              <div class="appt-name">José Carlos Ferreira</div>
              <div class="appt-type">Ergonomia e trabalho</div>
            </div>
            <span class="badge badge-amber">Pendente</span>
          </li>
          <li class="appt-item">
            <span class="appt-time">15:30</span>
            <div style="flex:1;">
              <div class="appt-name">Fernanda Alves</div>
              <div class="appt-type">Integração sensorial</div>
            </div>
            <span class="badge badge-amber">Pendente</span>
          </li>
        </ul>
      </div>

      <div>
        <div class="card" style="margin-bottom:16px;">
          <h2 style="font-family:Lora,serif;font-size:16px;font-weight:600;margin-bottom:14px;">Atividade semanal</h2>
          <div style="display:flex;align-items:flex-end;gap:8px;height:90px;" aria-label="Gráfico de atividade semanal">
            <div style="flex:1;text-align:center;">
              <div style="height:63px;background:var(--sage-pale);border-radius:4px 4px 0 0;"></div>
              <div style="font-size:10px;color:var(--text-muted);margin-top:4px;">S</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="height:45px;background:var(--sage-pale);border-radius:4px 4px 0 0;"></div>
              <div style="font-size:10px;color:var(--text-muted);margin-top:4px;">T</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="height:81px;background:var(--sage);border-radius:4px 4px 0 0;"></div>
              <div style="font-size:10px;color:var(--text-muted);margin-top:4px;">Q</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="height:54px;background:var(--sage-pale);border-radius:4px 4px 0 0;"></div>
              <div style="font-size:10px;color:var(--text-muted);margin-top:4px;">Q</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="height:72px;background:var(--sage-pale);border-radius:4px 4px 0 0;"></div>
              <div style="font-size:10px;color:var(--text-muted);margin-top:4px;">S</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="height:36px;background:var(--sage-pale);border-radius:4px 4px 0 0;"></div>
              <div style="font-size:10px;color:var(--text-muted);margin-top:4px;">S</div>
            </div>
            <div style="flex:1;text-align:center;">
              <div style="height:27px;background:var(--sage-pale);border-radius:4px 4px 0 0;"></div>
              <div style="font-size:10px;color:var(--text-muted);margin-top:4px;">D</div>
            </div>
          </div>
        </div>

        <div class="card">
          <h2 style="font-family:Lora,serif;font-size:16px;font-weight:600;margin-bottom:14px;">Alertas</h2>
          <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid rgba(74,124,89,0.08);">
            <i class="fa-solid fa-file-circle-exclamation" style="color:var(--amber);font-size:16px;width:20px;"></i>
            <span style="font-size:13px;">6 relatórios aguardam preenchimento</span>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid rgba(74,124,89,0.08);">
            <i class="fa-solid fa-calendar-xmark" style="color:var(--red);font-size:16px;width:20px;"></i>
            <span style="font-size:13px;">2 pacientes sem sessão há 30+ dias</span>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:10px 0;">
            <i class="fa-solid fa-check-circle" style="color:var(--sage);font-size:16px;width:20px;"></i>
            <span style="font-size:13px;">Licença MyClinic ativa até dez/2025</span>
          </div>
        </div>
      </div>
    </div>
  `;
};

console.log('Dashboard page loaded');

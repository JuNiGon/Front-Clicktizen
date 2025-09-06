
export async function buscarTemas(selectId = 'selectTemas') {
  const select = document.getElementById(selectId);

  select.innerHTML = `
      <option selected disabled>
        Carregando temas...
      </option>
    `;
  select.disabled = true;

  try {
    const response = await fetch(`${window.APP_CONFIG.API_BASE_URL}/themes`);
    const temas = await response.json();

    select.innerHTML = `<option selected disabled>Selecione um tema</option>`;

    temas.forEach(t => {
      const option = document.createElement('option');
      option.value = t.tema;
      option.textContent = t.tema;
      select.appendChild(option);
    });

    select.disabled = false;
  } catch (error) {
    console.error('Erro ao buscar temas:', error);
    select.innerHTML = `<option selected disabled>Erro ao carregar</option>`;
  }
}

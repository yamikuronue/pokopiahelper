(() => {
  "use strict";

  const STORAGE_KEY = "pokopia-companion:v1";
  const data = window.POKOPIA_DATA;

  const els = {
    panels: {
      foods: document.getElementById("panel-foods"),
      fossils: document.getElementById("panel-fossils"),
      islands: document.getElementById("panel-islands"),
    },
    tabs: [...document.querySelectorAll("[data-tab]")],
    chips: document.getElementById("flavor-chips"),
    flavorBanner: document.getElementById("flavor-banner"),
    foodList: document.getElementById("food-list"),
    fossilSets: document.getElementById("fossil-sets"),
    islandList: document.getElementById("island-list"),
    progressLabel: document.getElementById("progress-label"),
    progressFill: document.getElementById("progress-fill"),
    exportBtn: document.getElementById("btn-export"),
    importBtn: document.getElementById("btn-import"),
    importFile: document.getElementById("import-file"),
    resetBtn: document.getElementById("btn-reset"),
  };

  let activeFlavor = data.flavors[0].id;
  let collected = loadCollected();
  let openFoodId = null;

  function loadCollected() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return {};
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
      const out = {};
      for (const [k, v] of Object.entries(parsed)) {
        if (typeof k === "string" && v === true) out[k] = true;
      }
      return out;
    } catch {
      return {};
    }
  }

  function saveCollected() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(collected));
  }

  function allPieceIds() {
    return data.fossilSets.flatMap((set) => set.pieces.map((piece) => piece.id));
  }

  function iconFood(kind) {
    const paths = {
      Berry:
        '<circle cx="20" cy="22" r="10" fill="currentColor"/><path d="M20 8c0 4 3 6 6 7" stroke="#2d6a4f" stroke-width="2.5" fill="none" stroke-linecap="round"/><circle cx="16" cy="18" r="2" fill="#fff8f088"/>',
      Veggie:
        '<ellipse cx="20" cy="24" rx="9" ry="11" fill="currentColor"/><path d="M20 10v6M16 12c2 1 6 1 8 0" stroke="#2d6a4f" stroke-width="2.5" fill="none" stroke-linecap="round"/>',
      Drink:
        '<path d="M14 10h12l-1.5 22a4 4 0 0 1-4 3.5h-1a4 4 0 0 1-4-3.5L14 10z" fill="currentColor"/><path d="M13 10h14" stroke="#1d3557" stroke-width="2" stroke-linecap="round"/><rect x="17" y="4" width="6" height="6" rx="1.5" fill="#457b9d"/>',
      Cooked:
        '<ellipse cx="20" cy="26" rx="12" ry="5" fill="#c4a574"/><path d="M10 24c2-8 18-8 20 0" fill="currentColor"/><circle cx="15" cy="20" r="1.4" fill="#fff8f0"/><circle cx="22" cy="18" r="1.2" fill="#fff8f0"/>',
      Other:
        '<rect x="10" y="12" width="20" height="18" rx="4" fill="currentColor"/><path d="M14 18h12M14 24h8" stroke="#fff8f0" stroke-width="2" stroke-linecap="round"/>',
    };
    return `<svg class="glyph" viewBox="0 0 40 40" aria-hidden="true">${paths[kind] || paths.Other}</svg>`;
  }

  function iconFlavor(id) {
    const map = {
      neutral:
        '<circle cx="20" cy="20" r="12" fill="#7eb8a2"/><circle cx="20" cy="20" r="5" fill="#fff8f0"/>',
      sweet:
        '<path d="M20 8c6 6 10 10 10 15a10 10 0 1 1-20 0c0-5 4-9 10-15z" fill="#e89bb8"/><circle cx="16" cy="22" r="1.5" fill="#fff8f0"/>',
      spicy:
        '<path d="M22 6c-1 8 6 10 4 18a8 8 0 1 1-15-4c4-2 6-8 5-14 4 2 6 0 6 0z" fill="#e07a5f"/><path d="M18 14c1 3 3 5 5 6" stroke="#ffd166" stroke-width="2" fill="none"/>',
      dry:
        '<ellipse cx="20" cy="22" rx="11" ry="8" fill="#c4a574"/><path d="M12 18c3-4 13-4 16 0" stroke="#8a6a3d" stroke-width="2" fill="none"/><path d="M14 24h12" stroke="#fff8f088" stroke-width="2"/>',
      bitter:
        '<path d="M10 28c2-14 18-14 20 0-4 6-16 6-20 0z" fill="#6b8f71"/><path d="M20 8v8M16 12h8" stroke="#2d6a4f" stroke-width="2.5" stroke-linecap="round"/>',
      sour:
        '<circle cx="20" cy="20" r="12" fill="#e9c46a"/><path d="M14 18c2 3 10 3 12 0M15 24c3 2 7 2 10 0" stroke="#9a7b2a" stroke-width="2" fill="none" stroke-linecap="round"/>',
    };
    return `<svg viewBox="0 0 40 40" aria-hidden="true">${map[id] || map.neutral}</svg>`;
  }

  function iconBone() {
    return `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M12 14a4 4 0 1 1 4-4 4 4 0 1 1-4 4zm16 0a4 4 0 1 1 4-4 4 4 0 1 1-4 4zM14 12h12v4H14zm-2 14a4 4 0 1 1 4 4 4 4 0 1 1-4-4zm16 0a4 4 0 1 1 4 4 4 4 0 1 1-4-4zM14 28h12v-4H14z" fill="#c4a574"/><circle cx="20" cy="20" r="3" fill="#8a6a3d"/></svg>`;
  }

  function iconDoll() {
    return `<svg viewBox="0 0 40 40" aria-hidden="true"><ellipse cx="20" cy="28" rx="11" ry="8" fill="#e89bb8"/><circle cx="20" cy="15" r="9" fill="#ffd166"/><circle cx="17" cy="14" r="1.6" fill="#1d3557"/><circle cx="23" cy="14" r="1.6" fill="#1d3557"/><path d="M17 18c1.5 1.5 4.5 1.5 6 0" stroke="#1d3557" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M12 10c2-3 5-4 8-3" stroke="#2d6a4f" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`;
  }

  function checkMark() {
    return `<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 8.5 6.5 11.5 12.5 4.5" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function setTab(name) {
    els.tabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.tab === name));
    Object.entries(els.panels).forEach(([key, panel]) => {
      panel.classList.toggle("is-active", key === name);
    });
    history.replaceState(null, "", `#${name}`);
  }

  function renderChips() {
    els.chips.innerHTML = data.flavors
      .map((flavor) => {
        const active = flavor.id === activeFlavor;
        return `<button type="button" class="chip${active ? " is-active" : ""}" data-flavor="${flavor.id}" style="--flavor-accent:${flavor.color};border-color:${active ? flavor.color : "transparent"}">${escapeHtml(flavor.name)}</button>`;
      })
      .join("");
  }

  function renderFoods() {
    const flavor = data.flavors.find((item) => item.id === activeFlavor) || data.flavors[0];
    els.flavorBanner.style.setProperty("--flavor-accent", flavor.color);
    els.flavorBanner.innerHTML = `
      <div class="icon-wrap">${iconFlavor(flavor.id)}</div>
      <div>
        <h3>${escapeHtml(flavor.name)} · Mosslax</h3>
        <p>${escapeHtml(flavor.mosslax)}</p>
      </div>`;

    const foods = data.foods.filter((food) => food.flavor === activeFlavor);
    els.foodList.innerHTML = foods
      .map((food, index) => {
        const open = openFoodId === food.id;
        return `
      <li class="food-item${open ? " is-open" : ""}" style="--flavor-accent:${flavor.color};animation-delay:${Math.min(index, 8) * 0.03}s">
        <button type="button" class="food-item-toggle" data-food="${escapeHtml(food.id)}" aria-expanded="${open}">
          ${iconFood(food.kind)}
          <div class="food-item-main">
            <strong>${escapeHtml(food.name)}</strong>
            <span class="note">${escapeHtml(food.note)}</span>
            <span class="kind-tag">${escapeHtml(food.kind)}</span>
          </div>
          <span class="food-chevron" aria-hidden="true"></span>
        </button>
        <div class="food-recipe" ${open ? "" : "hidden"}>
          ${renderRecipe(food)}
        </div>
      </li>`;
      })
      .join("");
  }

  function renderRecipe(food) {
    if (!food.recipe) {
      return `<p class="recipe-empty">Not cooked — find, harvest, buy, or receive this item as-is.</p>`;
    }

    const recipe = food.recipe;
    const helpers = recipe.specialty
      ? (data.specialtyHelpers && data.specialtyHelpers[recipe.specialty]) || []
      : [];
    const ingredients = (recipe.ingredients || [])
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");

    let specialtyBlock = "";
    if (recipe.specialty) {
      const helperText = helpers.length
        ? `Example Pokémon: ${helpers.map((name) => escapeHtml(name)).join(", ")}`
        : "Bring a partner with this specialty near the station.";
      specialtyBlock = `
        <div class="recipe-block specialty-needed">
          <h4>Required specialty</h4>
          <p class="specialty-name">${escapeHtml(recipe.specialty)}</p>
          <p class="specialty-helpers">${helperText}</p>
        </div>`;
    } else {
      specialtyBlock = `
        <div class="recipe-block">
          <h4>Required specialty</h4>
          <p>None — cook with ingredients only.</p>
        </div>`;
    }

    const tip = recipe.tip
      ? `<p class="recipe-tip">${escapeHtml(recipe.tip)}</p>`
      : "";

    return `
      <div class="recipe-block">
        <h4>Station</h4>
        <p>${escapeHtml(recipe.station)}</p>
      </div>
      <div class="recipe-block">
        <h4>Ingredients</h4>
        <ul class="recipe-ingredients">${ingredients}</ul>
      </div>
      ${specialtyBlock}
      ${tip}`;
  }

  function setCount(set) {
    const done = set.pieces.filter((piece) => collected[piece.id]).length;
    return { done, total: set.pieces.length };
  }

  function renderProgress() {
    const ids = allPieceIds();
    const done = ids.filter((id) => collected[id]).length;
    const total = ids.length;
    els.progressLabel.textContent = `${done} / ${total} fossils`;
    els.progressFill.style.width = `${total ? (done / total) * 100 : 0}%`;
  }

  function renderFossils() {
    renderProgress();
    els.fossilSets.innerHTML = data.fossilSets
      .map((set) => {
        const { done, total } = setCount(set);
        const pieces = set.pieces
          .map((piece) => {
            const on = !!collected[piece.id];
            return `
            <button type="button" class="fossil-piece${on ? " is-done" : ""}" data-piece="${escapeHtml(piece.id)}" aria-pressed="${on}">
              <span class="check">${checkMark()}</span>
              <span>${escapeHtml(piece.name)}</span>
            </button>`;
          })
          .join("");
        return `
        <section class="fossil-set" aria-labelledby="set-${escapeHtml(set.id)}">
          <div class="fossil-set-header">
            ${iconBone()}
            <div>
              <h3 id="set-${escapeHtml(set.id)}">${escapeHtml(set.pokemon)}</h3>
              <p>${escapeHtml(set.display)}</p>
            </div>
            <div class="fossil-set-meta">${done}/${total}</div>
          </div>
          ${pieces}
        </section>`;
      })
      .join("");
  }

  function renderIslands() {
    const islands = data.dreamIslands || [];
    els.islandList.innerHTML = islands
      .map((island, index) => {
        const legendaryLabel = island.legendary
          ? escapeHtml(island.legendary)
          : "None confirmed";
        const legendaryClass = island.legendary ? "has-legendary" : "no-legendary";
        const materials = island.materials
          .map((item) => `<li>${escapeHtml(item)}</li>`)
          .join("");
        return `
        <article class="island-card" style="animation-delay:${Math.min(index, 8) * 0.04}s">
          <div class="island-card-header">
            ${iconDoll()}
            <div>
              <h3>${escapeHtml(island.doll)}</h3>
              <p>${escapeHtml(island.island)} · ${escapeHtml(island.biome)}</p>
            </div>
          </div>
          <div class="island-section">
            <h4>Materials</h4>
            <ul class="material-list">${materials}</ul>
          </div>
          <div class="island-section legendary-section ${legendaryClass}">
            <h4>Legendary</h4>
            <p class="legendary-name">${legendaryLabel}</p>
            <p class="legendary-note">${escapeHtml(island.legendaryNote || "")}</p>
          </div>
        </article>`;
      })
      .join("");
  }

  function togglePiece(id) {
    if (collected[id]) delete collected[id];
    else collected[id] = true;
    saveCollected();
    renderFossils();
  }

  function exportProgress() {
    const blob = new Blob([JSON.stringify({ version: 1, collected }, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "pokopia-fossils-backup.json";
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function importProgress(file) {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        const source =
          parsed.collected && typeof parsed.collected === "object" ? parsed.collected : parsed;
        const next = {};
        const valid = new Set(allPieceIds());
        for (const [key, value] of Object.entries(source)) {
          if (valid.has(key) && value === true) next[key] = true;
        }
        collected = next;
        saveCollected();
        renderFossils();
      } catch {
        window.alert("Could not read that backup file.");
      }
    };
    reader.readAsText(file);
  }

  function resetProgress() {
    if (!window.confirm("Clear all fossil checkmarks on this device?")) return;
    collected = {};
    saveCollected();
    renderFossils();
  }

  els.tabs.forEach((tab) => {
    tab.addEventListener("click", () => setTab(tab.dataset.tab));
  });

  els.chips.addEventListener("click", (event) => {
    const button = event.target.closest("[data-flavor]");
    if (!button) return;
    activeFlavor = button.dataset.flavor;
    openFoodId = null;
    renderChips();
    renderFoods();
  });

  els.foodList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-food]");
    if (!button) return;
    const id = button.dataset.food;
    openFoodId = openFoodId === id ? null : id;
    renderFoods();
  });

  els.fossilSets.addEventListener("click", (event) => {
    const button = event.target.closest("[data-piece]");
    if (!button) return;
    togglePiece(button.dataset.piece);
  });

  els.exportBtn.addEventListener("click", exportProgress);
  els.importBtn.addEventListener("click", () => els.importFile.click());
  els.importFile.addEventListener("change", () => {
    const file = els.importFile.files && els.importFile.files[0];
    if (file) importProgress(file);
    els.importFile.value = "";
  });
  els.resetBtn.addEventListener("click", resetProgress);

  const hash = (location.hash || "").replace("#", "");
  const initialTab = ["foods", "fossils", "islands"].includes(hash) ? hash : "foods";
  setTab(initialTab);
  renderChips();
  renderFoods();
  renderFossils();
  renderIslands();
})();

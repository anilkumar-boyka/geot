<template>
  <div>
    <b-nav-item-dropdown>
      <template #button-content>
        <b-avatar
          size="2rem"
          variant="info"
          src="https://placekitten.com/300/300"
        ></b-avatar>
      </template>

      <b-dropdown-header class="shadow-sm bg-white" style="min-width: 300px">
        <p>
          <img
            src="https://placekitten.com/300/300"
            alt="Smiley face"
            style="float: left; width: 35px; height: 35px; border-radius: 50%"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAACvCAMAAAC8TH5HAAAABlBMVEX///8AAABVwtN+AAABiUlEQVR4nO3TQZLDIAxE0XD/S2ffbiEZHAeb3zsHaD1N1Xw+hBBCCCGEEELIXWmVxDe1ZLweL95dvEPnpYHj9ZcX4q0E70X16QP/XyuFTe5nU/WS9uPFi/c9Xh3d+caLF+/F3uwRXrx4rbd07kepd7geL168y3mzWF/mP1mPF+8G3qHN4nXV+8fg/W3wzik633rdfsf7ZOPx4t3FGxfo6GyKeu0mmhkqXrx4b/P6FjvVPsrO7aYTaLx4H+rtjKpXx+fqjdfDi3cDr51qW7Mp9mppHF68eNf0ZgqtVpSW2Cb9ceJPixfvk722Redn/XrL+s6W4sX7Pq991enSpWJ0vIlfCi9evAt7dV5nFUl80rl0mooX7+O99aV0qi7VoeiPePHu522V6PV4CevXqzNovHgf7z17rqPFd1CN0fDixbuMt0nsuZ8fl9j4pfHixWu92aP4CC9evCVv/PJQ4m4q2i+JFy/eJb2lfQ4ASyldwot3U2+WurezZOkbL95XewkhhBBCCCGEkL3yBU2dIdYLdnGmAAAAAElFTkSuQmCC"
            alt="Smiley face"
            style="float: right; width: 50px; height: 40px"
          />
          <b class="m-3">Lawrence Powers</b><br />
          <span class="text-muted m-3">My page</span>
        </p>
      </b-dropdown-header>
      <b-dropdown-item-button class="mt-1">
        <b-icon icon="person-fill" variant="info"></b-icon>
        <span class="m-4">Edit profile</span></b-dropdown-item-button
      >
      <b-dropdown-item-button
        ><b-icon icon="gear-fill" variant="info"></b-icon>
        <span class="m-4">Settings</span></b-dropdown-item-button
      >
      <b-dropdown-item-button>
        <b-icon icon="power" variant="info"></b-icon>
        <span class="m-4">Logout</span></b-dropdown-item-button
      >
      <b-dropdown-item-button class="mt-2">
        <div class="text-secondary">
          <span>English</span>
          <b-icon icon="chevron-right" style="float: right"></b-icon>
        </div>
      </b-dropdown-item-button>
    </b-nav-item-dropdown>
  </div>
</template>

<style>
ul,
.dropdown-menu {
  right: 0;
}
.dropdown-toggle::after {
  display: none;
}
</style>

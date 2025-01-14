/**
 * @fileOverview Documentation pour docker-compose.yml
 * @version 1.0.0
 */

/**
 * @module docker-compose
 */

/**
 * @type {Object}
 * @property {Object} server - Configuration du service serveur.
 * @property {Object} client_web - Configuration du service client.
 */

/**
 * @type {Object}
 * @property {string} build - Chemin du Dockerfile.
 * @property {Array<string>} ports - Ports exposés.
 * @property {Array<string>} volumes - Volumes montés.
 */
const services = {
  /** 
   * Configuration du service serveur.
   * @type {Object}
   * @property {string} build - ./backend
   * @property {Array<string>} ports - ["8080:8080"]
   * @property {Array<string>} volumes - ["./about.json:/about.json"]
   */
  server: {
    build: './backend',
    ports: ['8080:8080'],
    volumes: ['./about.json:/about.json'],
  },

  /** 
   * Configuration du service client.
   * @type {Object}
   * @property {string} build - ./automation-platform
   * @property {Array<string>} ports - ["8081:8081"]
   * @property {Array<string>} volumes - ["shared_volume:/app"]
   * @property {Array<string>} depends_on - [ "server" ]
   */
  client_web: {
    build: './automation-platform',
    ports: ['8081:8081'],
    volumes: ['shared_volume:/app'],
    depends_on: ['server'],
  },
};

module.exports = services;
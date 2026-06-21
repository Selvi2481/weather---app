// Weather API Configuration
// Using OpenWeatherMap API (https://openweathermap.org/api)

const CONFIG = {
    // Your OpenWeatherMap API Key - CONFIGURED ✓
    API_KEY: '7f031ecd7c787b2221aae84bd2661497',
    
    // API Endpoints
    BASE_URL: 'https://api.openweathermap.org/data/2.5',
    WEATHER_ENDPOINT: '/weather',
    FORECAST_ENDPOINT: '/forecast',
    
    // Default settings
    UNITS: 'metric', // Use 'metric' for Celsius, 'imperial' for Fahrenheit
    LANGUAGE: 'en',
    
    // Validation
    isConfigured: function() {
        return this.API_KEY && this.API_KEY.length > 0;
    }
};

console.log('✅ Weather API Configuration Loaded');
console.log('API Key Status:', CONFIG.isConfigured() ? '✓ Configured' : '✗ Not Configured');
# Deployment & API Configuration Guide

## Issue: Failed to Fetch Error

The application was displaying "Failed to fetch" errors because the API URLs were hardcoded to `http://localhost:5000`, which only works in local development. For production deployments, the frontend needs to point to the correct backend API endpoint.

## Solution

The frontend now uses environment variables to dynamically configure the API base URL. This allows the same code to work in both development and production.

## Configuration

### For Local Development

The default behavior remains unchanged:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000/api`

No configuration needed for local development.

### For Fly.io Deployment (or any production deployment)

You need to set the `REACT_APP_API_URL` environment variable to point to your deployed backend API.

#### Option 1: Using Fly CLI

```bash
# Set the API URL to your deployed backend
fly secrets set REACT_APP_API_URL="https://your-backend-domain.com/api"

# Or if backend is on same Fly.io instance
fly secrets set REACT_APP_API_URL="https://your-app-name.fly.dev/api"
```

#### Option 2: In fly.toml configuration

Add to your `fly.toml` file:

```toml
[env]
  REACT_APP_API_URL = "https://your-backend-domain.com/api"
```

#### Option 3: Build-time configuration

Set during the build process:

```bash
REACT_APP_API_URL=https://your-api-url.com/api npm run build
```

## Determining Your API URL

### If Backend is on Same Fly.io App

If your backend and frontend are in the same Fly.io app, use the app's domain:

```
https://your-app-name.fly.dev/api
```

### If Backend is Deployed Separately

Use your backend's deployed URL:

```
https://your-backend-api.com/api
```

### If Backend is in Different Cloud Provider

```
https://api.example.com/api
```

## Testing the Configuration

1. After setting the environment variable, redeploy your app
2. Open the application in a browser
3. Navigate to the Hotels page
4. Check the Network tab in DevTools
5. Verify API requests are going to the correct endpoint

## Environment Variables Reference

| Variable | Default | Purpose |
|----------|---------|---------|
| `REACT_APP_API_URL` | `http://localhost:5000/api` | Base URL for API calls |

## API Endpoints

All API calls are made to:
```
{REACT_APP_API_URL}/auth/...
{REACT_APP_API_URL}/hotels/...
{REACT_APP_API_URL}/bookings/...
{REACT_APP_API_URL}/reviews/...
```

## Troubleshooting

### Still Getting "Failed to Fetch"

1. **Check API URL is set correctly**
   ```bash
   # Verify in Fly.io
   fly secrets list
   ```

2. **Verify backend is accessible**
   - Test the API URL in your browser
   - Check CORS configuration on backend
   - Verify backend is deployed and running

3. **Check browser console for errors**
   - Open DevTools (F12)
   - Check Console tab for specific error messages
   - Check Network tab to see actual API calls

### CORS Errors

If you see CORS errors, ensure your backend has CORS enabled:

```javascript
// In server/src/app.js
const cors = require('cors');
app.use(cors()); // Already included in our setup
```

## Backend Deployment

Make sure your backend is also deployed and accessible:

1. **For Fly.io**:
   ```bash
   fly deploy
   ```

2. **For other platforms** (Heroku, Railway, etc.):
   - Follow your platform's deployment instructions
   - Set environment variables (MONGODB_URI, JWT_SECRET, PORT)
   - Note the deployed URL for use in frontend configuration

## Complete Deployment Checklist

- [ ] Backend deployed and running
- [ ] Backend API accessible via HTTPS
- [ ] MONGODB_URI configured on backend
- [ ] JWT_SECRET configured on backend
- [ ] Frontend `REACT_APP_API_URL` set to backend API URL
- [ ] CORS enabled on backend
- [ ] Test API endpoints in browser
- [ ] Verify all pages load without "Failed to fetch" errors

## Example Deployment Steps

### Step 1: Deploy Backend to Fly.io

```bash
cd server
fly deploy
# Note the URL: https://your-api-app.fly.dev
```

### Step 2: Configure Frontend

```bash
# Set API URL environment variable
fly secrets set REACT_APP_API_URL="https://your-api-app.fly.dev/api"
```

### Step 3: Deploy Frontend

```bash
cd ../client
fly deploy
```

### Step 4: Test

Visit your app and verify hotels load without errors.

## Need Help?

- Check Fly.io documentation: https://fly.io/docs/
- Verify backend logs: `fly logs --app=backend-app-name`
- Verify frontend logs: `fly logs --app=frontend-app-name`
- Check browser DevTools Network tab for actual API calls

---

For local development, everything works out of the box without any configuration!

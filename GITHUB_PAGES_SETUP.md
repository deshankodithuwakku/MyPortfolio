# GitHub Pages Deployment Instructions

This guide will help you configure GitHub Pages as the publishing source for your Next.js portfolio website.

## Prerequisites

1. Your code should be pushed to a GitHub repository
2. The repository should be public (or you need GitHub Pro for private repo Pages)

## GitHub Pages Configuration Steps

### Method 1: Using GitHub Actions (Recommended)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. **Configure GitHub Pages Settings**:
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section in the left sidebar
   - Under **Source**, select **Deploy from a branch**
   - Choose **gh-pages** branch and **/ (root)** folder
   - Click **Save**

3. **The GitHub Action will automatically**:
   - Trigger on every push to the `main` branch
   - Build your Next.js application
   - Deploy the static files to the `gh-pages` branch
   - GitHub Pages will serve the content from this branch

### Method 2: Manual Deployment

If you prefer manual deployment:

1. **Build the project locally**:
   ```bash
   npm run build
   ```

2. **Deploy the `out` folder**:
   - Install `gh-pages` package: `npm install --save-dev gh-pages`
   - Add deploy script to package.json:
     ```json
     "scripts": {
       "deploy": "gh-pages -d out"
     }
     ```
   - Run: `npm run deploy`

## Configuration Files Explained

### `next.config.mjs`
- `output: 'export'` - Enables static HTML export
- `trailingSlash: true` - Ensures URLs work correctly on GitHub Pages
- `images: { unoptimized: true }` - Disables Next.js image optimization for static export
- `basePath` - Uncomment and set if your repo name differs from your domain

### `.github/workflows/deploy.yml`
- Automated deployment workflow
- Builds the app and deploys to `gh-pages` branch
- Triggered on pushes to `main` branch

### `public/.nojekyll`
- Tells GitHub Pages not to use Jekyll processing
- Ensures all files (including those starting with _) are served correctly

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update the `basePath` in `next.config.mjs` if needed

## Troubleshooting

### Build Errors
- Ensure all dynamic routes have `generateStaticParams()` function
- Check for client-side only code that needs 'use client' directive
- Verify all imports are correct

### Deployment Issues
- Check the Actions tab in GitHub for deployment logs
- Ensure the `gh-pages` branch exists and is selected in Pages settings
- Verify the repository is public or you have GitHub Pro

### 404 Errors
- Check if `trailingSlash: true` is set in `next.config.mjs`
- Ensure `.nojekyll` file exists in the `public` folder
- Verify the `basePath` configuration if using a repository name in the URL

## Your Site URL

After successful deployment, your site will be available at:
- `https://<username>.github.io/<repository-name>/` (if using basePath)
- `https://<username>.github.io/` (if repository name matches username)

## Development

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start production**: `npm start`
- **Lint**: `npm run lint`

The site will automatically rebuild and redeploy when you push changes to the main branch.
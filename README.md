# My Portfolio Website

A personal portfolio website built with Next.js, showcasing my skills, experience, and projects.

## Technologies Used

- Next.js
- React
- TypeScript
- GSAP for animations
- React Countup
- Swiper for carousels

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment. To deploy:

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy your site

### Manual Deployment

If you prefer to deploy manually:

```bash
npm run build
```

This will create a static export in the `out` directory that you can deploy to any static hosting service.

## Project Structure

- `app/` - Next.js app router pages
- `components/` - Reusable React components
- `public/` - Static assets
- `styles/` - CSS and styling files
- `util/` - Utility functions and helpers

## License

This project is licensed under the MIT License.

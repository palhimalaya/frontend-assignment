# Music World - Next.js Project

Music World is a Next.js project that utilizes the RapidAPI services to fetch data from the Billboard API and Spotify API. This README file provides instructions on how to set up and run the project on your local machine.

## Prerequisites

Before getting started, ensure that you have the following prerequisites:

- Node.js (version 12 or higher)
- Git

## Getting Started

To set up the Music World project, follow these steps:

1. Clone the GitHub repository to your local machine:

```bash
git clone https://github.com/palhimalaya/frontend-assignment
```

2. Change to the project directory:

```bash
cd frontend-assignment
```

3. Install the project dependencies using npm or yarn:

```bash
npm install
```

4. Create a `.env` file in the root directory of your project and add the following environment variable:

```plaintext
RAPID_API=YOUR_RAPID_API_KEY
```

Replace `YOUR_RAPID_API_KEY` with your actual RapidAPI key. You can obtain the key by subscribing to the [Billboard API](https://rapidapi.com/DevoCat/api/billboard-api5) and [Spotify API](https://rapidapi.com/Glavier/api/spotify23) services on the RapidAPI website.

5. Run the Next.js development server:

```bash
npm run dev
```

6. Open your web browser and visit `http://localhost:3000` to see the Music World project in action.

## Usage

Once the Music World project is up and running, you can navigate to the homepage and explore the features implemented based on your desired logic. The project is designed to fetch data from the Billboard API and Spotify API using the RapidAPI key specified in the `.env` file.

Feel free to modify the code and design as per your project requirements. You can add additional pages, components, and styles to enhance the functionality and user experience.

## Contributing

If you would like to contribute to the Music World project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name:

```bash
git checkout -b my-new-feature
```

3. Make the necessary changes and commit them:

```bash
git commit -am 'Add some feature'
```

4. Push the changes to your branch:

```bash
git push origin my-new-feature
```

5. Submit a pull request describing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

The Music World project utilizes the following APIs:

- [Billboard API](https://rapidapi.com/DevoCat/api/billboard-api5) by DevoCat
- [Spotify API](https://rapidapi.com/Glavier/api/spotify23) by Glavier

Special thanks to the creators of these APIs for providing the data used in this project.

## Contact

If you have any questions or suggestions regarding the Music World project, please feel free to contact me at [your-email@example.com](mailto:palhimalaya123@gmail.com).

Enjoy exploring the Music World!

# Eksperiment odločanja s kartami

Spletna aplikacija za demonstracijo eksperimenta s kartami, ki prikazuje vpliv zunanjih dejavnikov na odločanje.

## O projektu

Ta spletna aplikacija demonstrira, kako zunanje sugestije vplivajo na naše odločitve. Uporabniki so naključno razporejeni v eno od treh skupin:

1. **Nevtralna skupina**: Brez sugestije (50% zamenja, 50% ostane)
2. **Skupina "ostani"**: S sugestijo, da ostanejo pri prvotni izbiri (22% zamenja, 78% ostane)
3. **Skupina "zamenjaj"**: S sugestijo, da zamenjajo prvotno izbiro (70% zamenja, 30% ostane)

Aplikacija prikazuje, kako subtilne sugestije lahko pomembno vplivajo na naše odločitve, tudi ko mislimo, da sprejemamo neodvisne odločitve.

## Funkcionalnosti

- Interaktivna izbira kart z animacijami
- Vizualni prikaz rezultatov eksperimenta s pomočjo grafov
- Podrobna razlaga eksperimenta in njegovih implikacij
- Možnost ponovitve eksperimenta
- Možnost deljenja rezultatov na družbenih omrežjih
- Odziven dizajn za različne velikosti zaslonov

## Tehnologije

- [Next.js](https://nextjs.org/) - React ogrodje
- [TypeScript](https://www.typescriptlang.org/) - Tipiziran JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS ogrodje
- [Framer Motion](https://www.framer.com/motion/) - Knjižnica za animacije
- [Chart.js](https://www.chartjs.org/) - Knjižnica za grafe
- [React Icons](https://react-icons.github.io/react-icons/) - Ikone za React

## Namestitev in zagon

1. Klonirajte repozitorij:
   ```bash
   git clone https://github.com/username/karte.git
   cd karte
   ```

2. Namestite odvisnosti:
   ```bash
   npm install
   ```

3. Zaženite razvojni strežnik:
   ```bash
   npm run dev
   ```

4. Odprite [http://localhost:3000](http://localhost:3000) v brskalniku.

## Zgradba projekta

- `src/app/page.tsx` - Glavna stran aplikacije
- `src/components/Card.tsx` - Komponenta za prikaz kart
- `src/components/ExperimentResults.tsx` - Komponenta za prikaz rezultatov eksperimenta
- `src/components/ExperimentExplanation.tsx` - Komponenta za razlago eksperimenta
- `src/app/globals.css` - Globalni CSS stili

## Licenca

MIT

# Naučíme.se — pokyny pro AI agenty

## Repozitář (GitHub)

- **Webové rozhraní:** [github.com/Mvrty555/naucime.se](https://github.com/Mvrty555/naucime.se)
- **Klon (HTTPS):** `git clone https://github.com/Mvrty555/naucime.se.git`
- Po změnách standardně `git push` na `origin` (větev `main`).

## Hranice workspace (pro AI i skripty)

- Pracuj jen uvnitř kořene klonu **`naucime.se`**. Nepřidávej a neupravuj soubory mimo tento repozitář (viz `.cursor/rules/jen-slozky-projektu.mdc`).

## Sběr podkladů (v repu, mimo Git)

- Suroviny (PDF, MD, exporty, poznámky) ukládej do **`materialy-zdroje/`** v kořeni projektu. Adresář je v `.gitignore` — nejde do GitHubu, ale zůstává u tebe v pracovní kopii vedle zdrojáků.

## Výukový specialista (materiály)

Při doplňování výukového obsahu pro **naucime.se** platí role popsaná v souboru:

`.cursor/rules/vyukovy-specialista.mdc`

Stručně:

1. **Piš originální české texty** pro žáky ZŠ a SŠ; přizpůsob úroveň ročníku.
2. **Nekopíruj** souvislé bloky z cizích webů ani učebnic — inspiruj se osnovami a fakty, výklad přeformuluj.
3. **Citace a CC zdroje** jen srozumitelně a s uvedením zdroje tam, kde to dává smysl.
4. Ukládej strukturovaná data do `src/data/` (např. `src/data/vyuka/`), stránky do `src/app/`.
5. Ročníkové texty s interaktivními úlohami publikuj přes šablonu `/vyuka/[predmet]/[stupe]/[rocnik]` a rozšiř `registry.ts` + příslušný soubor `*-zs.ts` / `*-ss.ts`.
6. **Podklady z `materialy-zdroje/`** ber jako vstup; kanonický obsah webu vždy vzniká přepisem do dat v repu, ne kopírováním cizích celků (detail v `vyukovy-specialista.mdc`).

## Dirigent promptů (meta-instrukce)

Při skládání nebo ladění **promptů a systémových instrukcí** pro AI použij roli v:

`.cursor/rules/dirigent-promptu.mdc`

Tento soubor doplňuj, pokud se v projektu objeví další specializované role.

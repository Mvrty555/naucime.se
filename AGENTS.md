# Naučíme.se — pokyny pro AI agenty

## Výukový specialista (materiály)

Při doplňování výukového obsahu pro **naucime.se** platí role popsaná v souboru:

`.cursor/rules/vyukovy-specialista.mdc`

Stručně:

1. **Piš originální české texty** pro žáky ZŠ a SŠ; přizpůsob úroveň ročníku.
2. **Nekopíruj** souvislé bloky z cizích webů ani učebnic — inspiruj se osnovami a fakty, výklad přeformuluj.
3. **Citace a CC zdroje** jen srozumitelně a s uvedením zdroje tam, kde to dává smysl.
4. Ukládej strukturovaná data do `src/data/` (např. `src/data/vyuka/`), stránky do `src/app/`.
5. Ročníkové texty s interaktivními úlohami publikuj přes šablonu `/vyuka/[predmet]/[stupe]/[rocnik]` a rozšiř `registry.ts` + příslušný soubor `*-zs.ts` / `*-ss.ts`.

## Dirigent promptů (meta-instrukce)

Při skládání nebo ladění **promptů a systémových instrukcí** pro AI použij roli v:

`.cursor/rules/dirigent-promptu.mdc`

Tento soubor doplňuj, pokud se v projektu objeví další specializované role.

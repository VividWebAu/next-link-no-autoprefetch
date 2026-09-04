import Link from "../src/Link";

// @ts-expect-error missing href
<Link>Missing href</Link>;

// @ts-expect-error wrong type
<Link href={123}>Invalid</Link>;

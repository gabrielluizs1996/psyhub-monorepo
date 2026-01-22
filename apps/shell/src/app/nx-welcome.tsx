/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function NxWelcome({ title }: { title: string }) {
  return (
    <h1 className=" bg-background text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
      Encontre o{' '}
      <span className="text-primary">profissional ideal</span>{' '}
      para cuidar da sua mente
    </h1>
  );
}

export default NxWelcome;

create table if not exists public.products (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);

create table if not exists public.orders (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);

create table if not exists public.settings (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);

alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.settings enable row level security;

drop policy if exists "Public products read" on public.products;
drop policy if exists "Public products write" on public.products;
drop policy if exists "Public orders read" on public.orders;
drop policy if exists "Public orders write" on public.orders;
drop policy if exists "Public settings read" on public.settings;
drop policy if exists "Public settings write" on public.settings;

create policy "Public products read"
on public.products for select
to anon
using (true);

create policy "Public products write"
on public.products for all
to anon
using (true)
with check (true);

create policy "Public orders read"
on public.orders for select
to anon
using (true);

create policy "Public orders write"
on public.orders for all
to anon
using (true)
with check (true);

create policy "Public settings read"
on public.settings for select
to anon
using (true);

create policy "Public settings write"
on public.settings for all
to anon
using (true)
with check (true);

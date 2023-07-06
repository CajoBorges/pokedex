CREATE IF NOT EXISTS TABLE pokemons (
    name VARCHAR(24),
    number INTEGER,
    form VARCHAR(24),
    hp INTEGER,
    atk INTEGER,
    def INTEGER,
    spatk INTEGER,
    spdef INTEGER,
    speed INTEGER,
    pokemon_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
) CREATE IF NOT EXISTS TABLE users (
    name VARCHAR(24),
    email VARCHAR(24),
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    birth_date DATE
) CREATE IF NOT EXISTS TABLE userpokemons (
    user_id UUID NOT NULL,
    pokemon_id UUID NOT NULL,
    PRIMARY KEY(user_id, pokemon_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(pokemon_id) REFERENCES pokemons(pokemon_id)
)
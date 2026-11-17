-- CREATE DATABASE IF NOT EXISTS techstock_db;
USE techstock_db;

-- A tabela central de todo o projeto.
CREATE TABLE IF NOT EXISTS equipamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    categoria VARCHAR(60) NOT NULL,
    numero_serie VARCHAR(100) NOT NULL UNIQUE,
    status VARCHAR(100) NOT NULL,
    data_aquisicao VARCHAR(100) NOT NULL
);

-- Registros fictícios para testes.
INSERT INTO equipamentos (nome, categoria, numero_serie, status, data_aquisicao) VALUES
('MacBook Air M2', 'Notebook', 'TS-NB-001', 'Emprestado', '2026-02-10'),
('Dell Latitude 5440', 'Notebook', 'TS-NB-002', 'Disponivel', '2026-01-15'),
('Lenovo ThinkPad E14', 'Notebook', 'TS-NB-003', 'Manutencao', '2025-11-20'),
('Acer Aspire 5', 'Notebook', 'TS-NB-004', 'Disponivel', '2026-03-06'),
('Monitor LG UltraWide 29', 'Monitor', 'TS-MN-005', 'Disponivel', '2025-09-14'),
('Monitor Dell 24', 'Monitor', 'TS-MN-006', 'Emprestado', '2026-04-04'),
('Monitor Samsung 27', 'Monitor', 'TS-MN-007', 'Disponivel', '2026-03-18'),
('Monitor AOC 24', 'Monitor', 'TS-MN-008', 'Manutencao', '2025-08-07'),
('Mouse Logitech MX Master', 'Mouse', 'TS-MS-009', 'Emprestado', '2026-01-21'),
('Mouse Microsoft Bluetooth', 'Mouse', 'TS-MS-010', 'Disponivel', '2026-02-11'),
('Mouse Logitech M720', 'Mouse', 'TS-MS-011', 'Disponivel', '2025-12-03'),
('Teclado Logitech K380', 'Teclado', 'TS-TC-012', 'Emprestado', '2025-09-29'),
('Teclado Keychron K2', 'Teclado', 'TS-TC-013', 'Disponivel', '2026-04-13'),
('Headset HyperX Cloud', 'Headset', 'TS-HD-014', 'Disponivel', '2026-05-06'),
('Headset Jabra Evolve2', 'Headset', 'TS-HD-015', 'Manutencao', '2026-02-19'),
('Dock Station Dell WD19', 'Acessório', 'TS-AC-016', 'Emprestado', '2026-01-12'),
('Webcam Logitech C920', 'Acessório', 'TS-AC-017', 'Disponivel', '2025-10-23'),
('Hub USB-C Anker', 'Acessório', 'TS-AC-018', 'Disponivel', '2026-03-30');


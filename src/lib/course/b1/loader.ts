/**
 * Server-side loader para unidades B1.
 * Carga los datos en el servidor para evitar import dinámico en cliente.
 */

export async function getB1UnitData(unitNumber: string) {
  const unitModule = await import(`./unit-${unitNumber}`);
  const exportName = `UNIT_${unitNumber.toUpperCase().replace('-', '_')}_EXERCISES`;
  const exercises =
    unitModule[exportName] ||
    unitModule[`UNIT_${unitNumber}_EXERCISES`] ||
    unitModule.default ||
    unitModule.UNIT_1_EXERCISES;
  const title = unitModule.UNIT_TITLE || unitModule.title || `Unidad ${unitNumber}`;
  return { exercises: Array.isArray(exercises) ? exercises : [], title };
}

export async function getB1FinalTestData() {
  const testModule = await import('./final-test-b1');
  const exercises = testModule.FINAL_TEST_B1_EXERCISES ?? [];
  const title = testModule.FINAL_TEST_B1_TITLE ?? 'Test final B1';
  return { exercises: Array.isArray(exercises) ? exercises : [], title };
}

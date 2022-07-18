export const Choose = (
  <Choose>
    <When condition={true}> I want Tea</When>
    <When condition={false}> Job in FAANG</When>
    <When condition={true}> Trell to the moon</When>
    <OtherWise> Tea/Coffee + Sandwich </OtherWise>
  </Choose>
);

{
  true ? (
    <>IwantTea</>
  ) : false ? (
    <>Job in FAANG</>
  ) : true ? (
    <>Trell to the moon</>
  ) : (
    <>Tea/Coffee + Sandwich</>
  );
}
